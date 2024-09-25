import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from '../inventory-management/inventory-management.component';

export interface PeriodicElement {
  discount:string;
  name: string;
  email:string;
  balance:string;
  eKYC: string;
  totalSales:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Completed", totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Zacky', email: "zacky@gmail.com",  eKYC: "Rejected",  totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Emily ', email: "emily@gmail.com", eKYC: "Completed",  totalSales: "120k",discount: "5%",  balance: '150$'},
  {name: 'Mark', email: "mark@gmail.com", eKYC: "Completed",     totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com",eKYC: "Pending",   totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Rejected", totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Completed", totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Completed",  totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Pending",  totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Zacky', email: "zacky@gmail.com", eKYC: "Completed",   totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Emily ', email: "emily@gmail.com", eKYC: "Completed",   totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Mark', email: "mark@gmail.com", eKYC: "Completed",      totalSales: "120k", discount: "5%", balance: '150$'},
  {name: 'Rajesh', email: "rajesh@gmail.com", eKYC: "Pending",  totalSales: "120k", discount: "#5%", balance: '150$'},
];
@Component({
  selector: 'app-reseller',
  templateUrl: './reseller.component.html',
  styleUrls: ['./reseller.component.scss']
})
export class ResellerComponent {

  showActive: boolean = true;
  showExpired: boolean = false;
  tooltipContent:any ='ghgh'
  showMenu:boolean = false
  displayedColumns: string[] = ['name', 'email', 'eKYC','totalSales','discount', 'balance', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild('tooltipTemplate') tooltipTemplate!: TemplateRef<any>;

  

  constructor(public dialog: MatDialog){

  }

  openMenu(){
    this.showMenu = !this.showMenu
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  activeCustomers(){
    this.showActive = true;
    this.showExpired = false;
    
  }

  // ekycRejected(element: any) {
    
  //     if(element.eKYC === 'Rejected'){
  //       const dialog = this.dialog.open(EkycDialogeComponent, {
  //         panelClass: ['dilogue-custom'],
  //         autoFocus: false
  //       })
  //       dialog.afterClosed().subscribe(result => {
  //         if(result){
  //         }
          
  //       })
  //     }else if(element.eKYC === 'Pending'){

  //       const dialog = this.dialog.open(AddUserComponent, {
  //         panelClass: ['dilogue-custom'],
  //         autoFocus: false
  //       })
  //       dialog.afterClosed().subscribe(result => {
  //         if(result){
  //         }
          
  //       })

  //     }
    
    
    
  // }

  newReseller() {
    const dialog = this.dialog.open(NewReseller, {
      panelClass: ['dilogue-custom','new-reseller-dialogue'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })
  }
 

  expired(){
    this.showActive = false;
   this.showExpired = true;
  }

  getTooltipContent():any{
       return this.tooltipContent
  }

  // add() {
  //   const dialog = this.dialog.open(AddCustomerDialog, {
  //     panelClass: ['dilogue-custom'],
  //     autoFocus: false
  //   })
  //   dialog.afterClosed().subscribe(result => {
  //     if(result){
  //     }
      
  //   })
  // }

}

@Component({
  selector: 'app-newReseller',
  templateUrl: './new_reseller.component.html',
  styleUrls: ['./reseller.component.scss']
})
export class NewReseller {


  showBasicDetails: boolean = true;
  showBusinessDetails:boolean = false
  showKycDetails:boolean = false;
  fileName: string = '';

  constructor(public dialogRef: MatDialogRef<NewReseller>, public dialog: MatDialog) { }


  back(){
    if (this.showKycDetails) {
      this.showKycDetails = false;
      this.showBusinessDetails = true;
    } else if (this.showBusinessDetails) {
      this.showBusinessDetails = false;
      this.showBasicDetails = true;
    }
  }
  next(){
    if (this.showBasicDetails) {
      this.showBasicDetails = false;
      this.showBusinessDetails = true;
    } else if (this.showBusinessDetails) {
      this.showBusinessDetails = false;
      this.showKycDetails = true;
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = '';
    }
  }
  close(){
    this.dialogRef.close()
  }

}