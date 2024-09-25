import { Component, OnInit } from '@angular/core';
import { AgentLcmService } from 'src/app/api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CountryISO,
  SearchCountryField,
} from "ngx-intl-tel-input";
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoginService } from 'src/providers/auth.service';
import { StoreDataService } from 'src/services/store-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  value = 80;
  value1 = 80;
  profileProgressVal:any = 30;
  public profileData: any;
  public profileFlag: boolean = true;
  public agentProfileForm!: FormGroup;
  public imageUrl: any;
  public profileUrl: any;
  public kycForm!: FormGroup;
  public separateDialCode: boolean = false;
  public SearchCountryField = SearchCountryField;
  public CountryISO = CountryISO;
  public kycEditFlag: boolean = true;
  public preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];
  public token: any;
  public fileObj: any;
  public countryList:any[]=[]
  constructor(public userService: AgentLcmService, public formBuilder: FormBuilder, public datePipe: DatePipe,
    public router: Router, public matSnackbar: MatSnackBar,
    public loginService: UserLoginService, public storeService: StoreDataService
  ) { }

  ngOnInit(): void {

    this.agentProfileForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z ]+")]],
      last_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      agent_type: ['', Validators.required],
      phone: ['', Validators.required],
      alternate_phone_number: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postal_code: ['', Validators.required],

    })

    this.kycForm = this.formBuilder.group({
      tin: ['', Validators.required],
      crn: ['', Validators.required]
    })

    let data: any = localStorage.getItem('agent-data')
    if (data) {
      this.profileData = JSON.parse(data);
      this.token = localStorage.getItem('agent-token')
      this.assignProfileData()
    }
    this.getCountries()
  }

  public getCountries(){
    this.loginService.getCountries().subscribe(res=>{
      this.countryList = res;
    })
  }

  public editProfile() {
    this.profileFlag = false;
  }

  public editKyc() {
    this.kycEditFlag = false;
  }

  public onFileSelectedProfile(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.profileUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    this.fileObj = event.target.files[0]

    reader.onload = () => {
      this.imageUrl = reader.result as string;

    };
    reader.readAsDataURL(file);
  }

  public assignProfileData() {
    this.userService.getAgentById({ 'id': this.profileData.agent.agent_id, 'bearer-token': this.token }).subscribe(res => {
      if (res.agent) {
        this.profileData = res;
        localStorage.setItem('agent-data', JSON.stringify(res))
        this.agentProfileForm = this.formBuilder.group({
          first_name: [this.profileData.agent.agent_name.split(' ')[0], [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z ]+")]],
          last_name: [this.profileData.agent.agent_name.split(' ')[1], [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]],
          email: [this.profileData.agent.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          agent_type: [this.profileData.agent.agent_type, Validators.required],
          phone: [this.profileData.agent.phone, Validators.required],
          alternate_phone_number: [this.profileData.agent.alternate_phone_number, Validators.required],
          date_of_birth: [this.profileData.agent.date_of_birth == "0001-01-01" ? '' : this.profileData.agent.date_of_birth, Validators.required],
          address: [this.profileData.agent.address, Validators.required],
          city: [this.profileData.agent.city, Validators.required],
          country: [this.profileData.agent.country, Validators.required],
          postal_code: [this.profileData.agent.postal_code, Validators.required],
        })
        this.kycForm = this.formBuilder.group({
          tin: [this.profileData.agent.tin, Validators.required],
          crn: [this.profileData.agent.crn, Validators.required]
        })
        this.imageUrl = this.profileData.agent.ekyc_data[0] ? 'data:image/' + this.profileData.agent.ekyc_data[0].format.toLowerCase() + ';base64,' + this.profileData.agent.ekyc_data[0].ekyc_image : '';
        if(this.profileData.address){
          this.profileProgressVal = 70
        }
        if(this.profileData.agent.ekyc_data[0]){
          this.profileProgressVal = 100
        }
      }
    }, err => {
      if (err.status == 401) {
        localStorage.removeItem('agent-data')
        this.router.navigate(['/login'])
      }
    })

  }


  updateProfile() {
    if (!this.profileFlag) {
      let reqObj: any = {
        "agent": {
          "address": this.agentProfileForm.value.address,
          "agent_name": this.agentProfileForm.value.first_name + ' ' + this.agentProfileForm.value.last_name,
          "agent_type": this.agentProfileForm.value.agent_type,
          "city": this.agentProfileForm.value.city,
          "country": this.agentProfileForm.value.country,
          "date_of_birth": this.datePipe.transform(this.agentProfileForm.value.date_of_birth, 'yyyy-MM-dd'),
          "email": this.agentProfileForm.value.email,
          "phone": this.agentProfileForm.value.phone.includes('91') ? this.agentProfileForm.value.phone : '91'+this.agentProfileForm.value.phone ,
          "alternate_phone_number": this.agentProfileForm.value.alternate_phone_number.includes('91') ? this.agentProfileForm.value.alternate_phone_number : '91'+this.agentProfileForm.value.alternate_phone_number,
          "postal_code": this.agentProfileForm.value.postal_code,
          "profile_img": this.profileUrl ? [this.profileUrl.split(',')[1]] : '',
          tin: this.profileData.agent.tin,
          crn: this.profileData.agent.crn,
          ekyc_data: this.profileData.agent.ekyc_data[0] ? this.profileData.agent.ekyc_data : []
        }
      }
      if (this.agentProfileForm.valid) {
        this.userService.updateAgent({
          'id': this.profileData.agent.agent_id, 'resource_version': this.profileData.agent.resource_version, 'bearer-token': this.token,
          'body': reqObj
        }).subscribe(res => {
          if (res.agent) {
            this.matSnackbar.open('Profile updated successfully', 'OK', {
              verticalPosition: 'top',
              duration: 3000,
              panelClass: 'snack-success'
            })
            this.storeService.saveuserInfo(res)
            this.assignProfileData()
          }
        }, err => {
          if (err.status == 401) {
            localStorage.removeItem('agent-data')
            this.router.navigate(['/login'])
          }
        })
      }else{
        if(this.agentProfileForm.get('first_name')?.hasError('required')){
          this.matSnackbar.open('Please enter First Name', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('first_name')?.hasError('pattern')){
          this.matSnackbar.open('Please enter valid First Name', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('last_name')?.hasError('required')){
          this.matSnackbar.open('Please enter Last Name', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('last_name')?.hasError('pattern')){
          this.matSnackbar.open('Please enter valid Last Name', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('email')?.hasError('required')){
          this.matSnackbar.open('Please enter Email', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('email')?.hasError('pattern')){
          this.matSnackbar.open('Please enter Valid Email', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('date_of_birth')?.hasError('required')){
          this.matSnackbar.open('Please enter Date of Birth', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('address')?.hasError('required')){
          this.matSnackbar.open('Please enter Address', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('city')?.hasError('required')){
          this.matSnackbar.open('Please enter City', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('country')?.hasError('required')){
          this.matSnackbar.open('Please enter Country', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('postal_code')?.hasError('required')){
          this.matSnackbar.open('Please enter Postal Code', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('phone')?.hasError('required')){
          this.matSnackbar.open('Please enter Mobile Number', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.agentProfileForm.get('alternate_phone_number')?.hasError('required')){
          this.matSnackbar.open('Please enter Alternate Mobile Number', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }
      }

    }

  }

  public updateKyc() {
    if (!this.kycEditFlag) {
      let reqObj: any = {
        agent: {
          "address": this.agentProfileForm.value.address,
          "agent_name": this.agentProfileForm.value.first_name + ' ' + this.agentProfileForm.value.last_name,
          "agent_type": this.agentProfileForm.value.agent_type,
          "city": this.agentProfileForm.value.city,
          "country": this.agentProfileForm.value.country,
          "date_of_birth": this.datePipe.transform(this.agentProfileForm.value.date_of_birth, 'yyyy-MM-dd'),
          "email": this.agentProfileForm.value.email,
          "phone": this.agentProfileForm.value.phone.includes('91') ? this.agentProfileForm.value.phone : '91'+this.agentProfileForm.value.phone ,
          "alternate_phone_number": this.agentProfileForm.value.alternate_phone_number.includes('91') ? this.agentProfileForm.value.alternate_phone_number : '91'+this.agentProfileForm.value.alternate_phone_number,
          "postal_code": this.agentProfileForm.value.postal_code,
          "profile_img": this.profileUrl ? [this.profileUrl.split(',')[1]] : '',
          tin: this.kycForm.value.tin,
          crn: this.kycForm.value.crn,
          ekyc_data: [
            {
              "document_name": this.fileObj ? this.fileObj.name.split('.')[0] : this.profileData.agent.ekyc_data[0] ? this.profileData.agent.ekyc_data[0].document_name : '' ,
              "ekyc_image": this.imageUrl ? this.imageUrl.split(',')[1] : '',
              "format": this.fileObj ? this.fileObj.type.split('/')[1].toUpperCase() : this.profileData.agent.ekyc_data[0] ? this.profileData.agent.ekyc_data[0].format : ''
            }
          ]
        }
      }
      if(this.kycForm.valid){
        this.userService.updateAgent({
          'id': this.profileData.agent.agent_id, 'resource_version': this.profileData.agent.resource_version, 'bearer-token': this.token,
          'body': reqObj
        }).subscribe(res => {
          if (res.agent) {
            this.matSnackbar.open('KYC updated successfully', 'OK', {
              verticalPosition: 'top',
              duration: 3000,
              panelClass: 'snack-success'
            })
            localStorage.setItem('agent-data', JSON.stringify(res))
            this.profileData = res;
            this.storeService.saveuserInfo(res)
          }
        }, err => {
          if (err.status == 401) {
            localStorage.removeItem('agent-data')
            this.router.navigate(['/login'])
          } else {
            this.matSnackbar.open(err.error.error, 'OK', {
              verticalPosition: 'top',
              duration: 3000,
              panelClass: 'snack-error'
            })
          }
        })
      }else{
        if(this.kycForm.get('tin')?.hasError('required')){
          this.matSnackbar.open('Please enter TIN', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }else if(this.kycForm.get('crn')?.hasError('required')){
          this.matSnackbar.open('Please enter CRN', 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: 'snack-error'
          })
        }
      }
     
    }

  }

}
