import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from '../inventory-management/inventory-management.component';
import { UserLcmService } from 'src/app/api/services';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CountryService } from '../providers/country.service';

export interface PeriodicElement {
  id:string;
  name: string;
  email:string;
  phone:string;
  nationality:string;
  img: string;
  eKYC: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876368", name: 'Zacky', email: "zacky@gmail.com",  img: "assets/img/user2.jpg", phone: "+91 8796542130",  nationality: 'Spain', eKYC: "Rejected"},
  {id: "#876412", name: 'Emily', email: "emily@gmail.com",  img: "assets/img/user3.jpg", phone: "+91 8541230795",  nationality: 'Asia', eKYC: "Completed"},
  {id: "#876364", name: 'Mark', email: "mark@gmail.com",  img: "", phone: "+91 9854632104",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876621", name: 'Rajesh', email: "rajesh@gmail.com",  img: "assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'USA', eKYC: "Pending"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Rejected"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "assets/img/user3.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876364", name: 'Rajesh', email: "rajesh@gmail.com",  img: "assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'Spain', eKYC: "Pending"},
  {id: "#876368", name: 'Zacky', email: "zacky@gmail.com",  img: "assets/img/user2.jpg", phone: "+91 8796542130",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876412", name: 'Emily', email: "emily@gmail.com",  img: "assets/img/user3.jpg", phone: "+91 8541230795",  nationality: 'Asia', eKYC: "Completed"},
  {id: "#876364", name: 'Mark', email: "mark@gmail.com",  img: "", phone: "+91 9854632104",  nationality: 'Spain', eKYC: "Completed"},
  {id: "#876621", name: 'Rajesh', email: "rajesh@gmail.com",  img: "assets/img/user1.jpg", phone: "+91 7904242864",  nationality: 'USA', eKYC: "Pending"},
];


@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {

  showActive: boolean = true;
  showExpired: boolean = false;
  tooltipContent:any ='ghgh'
  showMenu:boolean = false
  profileData:any;
  displayedColumns: string[] = [ 'name', 'email', 'phone', 'nationality', 'eKYC', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchTerm: any;
  token:any;
  public userList:any[]=[]

  constructor(public dialog: MatDialog, public userService: UserLcmService){

  }

  openMenu(){
    this.showMenu = !this.showMenu
  }

  editUser(obj:any){
    const dialog = this.dialog.open(AddCustomerDialog, {
      panelClass: ['dilogue-custom'],
      autoFocus: false,
      data: obj
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.getUsers()
      }
      
    })
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('agent-data')
    if (data) {
      this.profileData = JSON.parse(data);
      this.token = localStorage.getItem('agent-token')
      this.getUsers()
    }
  }

  getUsers(){
    this.userService.getUserOfAgent({'bearer-token': this.token, 'agent': this.profileData.agent.agent_name}).subscribe(res=>{
      if(res.users){
        this.userList = res.users;
        this.dataSource = new MatTableDataSource(this.userList)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  
  activeCustomers(){
    this.showActive = true;
    this.showExpired = false;
    
  }

  ekycRejected(element: any) {
    
      if(element.ekyc_completed === true ){
        const dialog = this.dialog.open(EkycDialogeComponent, {
          panelClass: ['dilogue-custom'],
          autoFocus: false
        })
        dialog.afterClosed().subscribe(result => {
          if(result){
          }
          
        })
      }else if(element.ekyc_completed === false){

        const dialog = this.dialog.open(EkycDialogeComponent, {
          panelClass: ['dilogue-custom'],
          autoFocus: false
        })
        dialog.afterClosed().subscribe(result => {
          if(result){
          }
          
        })

      }
    
    
    
  }

  expired(){
    this.showActive = false;
   this.showExpired = true;
  }

  getTooltipContent():any{
       return this.tooltipContent 
  }

  add() {
    const dialog = this.dialog.open(AddCustomerDialog, {
      panelClass: ['dilogue-custom'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.getUsers()
      }
      
    })
  }

}


@Component({
  selector: 'add-customer-dialog',
  templateUrl: 'add-customer.html'
})

export class AddCustomerDialog {

  // addAddressForm!:FormGroup
  token:any
  profileData:any;
  addUserForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddCustomerDialog>, public countryService: CountryService ,
   public formBuilder: FormBuilder, public dialog: MatDialog, public datePipe: DatePipe,
  public userService: UserLcmService, public matSnackbar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public dialogData:any) {
    let data: any = localStorage.getItem('agent-data')
    if (data) {
      this.profileData = JSON.parse(data);
      this.token = localStorage.getItem('agent-token')
    }
    this.addUserForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z ]+")]],
      last_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone:['', Validators.required],
      date_of_birth:['', Validators.required],
      address:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
      postal_code:['', Validators.required]
    })
    if(this.dialogData){
      this.addUserForm = this.formBuilder.group({
        first_name: [this.dialogData.user_name.split(' ')[0], [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z ]+")]],
        last_name: [this.dialogData.user_name.split(' ')[1], [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]],
        email: [this.dialogData.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        phone:[this.dialogData.phone, Validators.required],
        date_of_birth:[this.dialogData.date_of_birth, Validators.required],
        address:[this.dialogData.address, Validators.required],
        city:[this.dialogData.city, Validators.required],
        country:[this.dialogData.country, Validators.required],
        postal_code:[this.dialogData.postal_code, Validators.required]
      })
    }
  }

  ngOnInit(): void {
    this.allCountries()
  }


  close() {
    this.dialogRef.close()
  }

  add() {
    if(this.addUserForm.valid){
      let reqObj:any = {
        "user": {
          "address": this.addUserForm.value.address,
          "city": this.addUserForm.value.city,
          "country": this.addUserForm.value.country,
          "date_of_birth": this.datePipe.transform(this.addUserForm.value.date_of_birth, 'yyyy-MM-dd'),
          "email": this.addUserForm.value.email,
          "phone": this.addUserForm.value.phone.includes('91') ? this.addUserForm.value.phone : '91'+this.addUserForm.value.phone,
          "postal_code": this.addUserForm.value.postal_code,
          "primary_account": true,
          "profile_img": "",
          "user_name": this.addUserForm.value.first_name + ' ' + this.addUserForm.value.last_name
        }
      }
      console.log(this.addUserForm.value.country)
      if(this.dialogData){
        this.userService.updateUser({'bearer-token': this.token, 'id':this.dialogData.id, 'resource_version': this.dialogData.resource_version, 'agent': this.profileData.agent.agent_name, 'body': reqObj}).subscribe(res=>{
          if(res.user){
            this.matSnackbar.open('User updated successfully', 'OK',{
              verticalPosition:'top',
              duration: 3000,
              panelClass: 'snack-success'
            })
            this.dialogRef.close(res)
          }
        }, err=>{
          this.matSnackbar.open(err.error.error, 'OK',{
            verticalPosition:'top',
            duration: 3000,
            panelClass: 'snack-error'
          })
        })
      }else{
        this.userService.createUser({'bearer-token': this.token, 'agent': this.profileData.agent.agent_name, 'body': reqObj}).subscribe(res=>{
          if(res.user){
            this.matSnackbar.open('User added successfully', 'OK',{
              verticalPosition:'top',
              duration: 3000,
              panelClass: 'snack-success'
            })
            this.dialogRef.close(res)
          }
        }, err=>{
          this.matSnackbar.open(err.error.error, 'OK',{
            verticalPosition:'top',
            duration: 3000,
            panelClass: 'snack-error'
          })
        })
      }
    
    }
  }


  // add(){
  //   if(this.addUserForm.valid){
  //     let reqObj:any = {
  //       "users":{
  //         "address": this.addUserForm.value.address,
  //         "city":this.addUserForm.value.city,
  //         "country": this.addUserForm.value.country,
  //         "date_of_birth": this.addUserForm.value.date_of_birth,
  //         "email":this.addUserForm.value.email,
  //         "phone":this.addUserForm.value.phone.includes('91') ? this.addUserForm.value.phone : '91'+ this.addUserForm.value.phone,
  //         "postal_code":this.addUserForm.value.postal_code,
  //         "profile_img":'',
  //         "primary_account": true,
  //         "user_name": this.addUserForm.value.first_name+' '+ this.addUserForm.value.last_name,
  //       }
  //     }
  //     if(this.dialogData){
  //       this.userService.updateUser({'bearer-token': this.token, 'id':this.dialogData.id, 'resource_version': this.dialogData.resource_version, 'agent': this.profileData.agent.agent_name, 'body': reqObj}).subscribe(res=> {

  //       })
  //     }
     
  //   }
  // }


  countries: any[] = [];

  allCountries(){
    this.countryService.getCountries().subscribe((data) => {
      console.log(data)

      this.countries = data;
      console.log(this.countries)

    });

    this.userService.getUserOfAgent({limit: 10, page_marker: 0, agent: this.profileData.agent_name, 'bearer-token':  this.profileData.token}).subscribe(res=>{

    })
   
  }
  


}


@Component({
  selector: 'add-ekyc-dialoge',
  templateUrl: 'ekyc-dialoge.component.html'
})

export class EkycDialogeComponent {

  imageUrl:any;
  
  constructor(public dialogRef: MatDialogRef<EkycDialogeComponent>,) {

  }


  close() {
    this.dialogRef.close()
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
  


}
