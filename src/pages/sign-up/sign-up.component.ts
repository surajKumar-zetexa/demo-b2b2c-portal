import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgentLcmService, RegionLcmService, UserLcmService } from 'src/app/api/services';
import { RegistrationLcmService } from 'src/app/register/services';
import { UserLoginService } from 'src/providers/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public agentSignupForm!: FormGroup;

  public otpFlag: boolean = false;
  public otpData:any;
  countriesdata: any[] = []; 
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
  };
 

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }



  public otp!: string; showOtpComponent = true;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  public config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, };
  constructor(public router: Router, public formBuilder: FormBuilder, public registrationService: UserLoginService,
    public userService: AgentLcmService, public matSnackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getCountries();
    this.agentSignupForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z ]+")]],
      last_name: ['', [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      // agent_type: ['', Validators.required],
      countries: ['', Validators.required],
      agree:[false]
      // country:['', Validators.required]
    })
  }



  signUp() {
    if(this.agentSignupForm.valid && this.agentSignupForm.value.agree){
    let reqObj = {
      "agent_name": this.agentSignupForm.value.first_name + ' ' + this.agentSignupForm.value.last_name,
      "agent_type": this.agentSignupForm.value.agent_type,
      "email": this.agentSignupForm.value.email,
      "register_agent": true,
      // "country": this.agentSignupForm.value.country
    }
    this.registrationService.userSignup(reqObj).subscribe(res => {
      console.log(res)
      this.otpFlag = true

    }, err => {
      this.matSnackbar.open(err.error.error, 'OK', {
        verticalPosition: 'top',
        duration: 4000,
        panelClass: 'snack-error'
      })
    })
    }else if(!this.agentSignupForm.valid){
      if(this.agentSignupForm.get('first_name')?.hasError('required')){
        this.matSnackbar.open('Please enter First Name', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else if(this.agentSignupForm.get('first_name')?.hasError('pattern')){
        this.matSnackbar.open('Please enter valid First Name', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else  if(this.agentSignupForm.get('last_name')?.hasError('required')){
        this.matSnackbar.open('Please enter Last Name', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else if(this.agentSignupForm.get('last_name')?.hasError('pattern')){
        this.matSnackbar.open('Please enter valid Last Name', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else if(this.agentSignupForm.get('email')?.hasError('required')){
        this.matSnackbar.open('Please enter Email', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else if(this.agentSignupForm.get('email')?.hasError('pattern')){
        this.matSnackbar.open('Please enter valid Email', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }else if(this.agentSignupForm.get('agent_type')?.hasError('required')){
        this.matSnackbar.open('Please Select Agent Type', 'OK', {
          verticalPosition: 'top',
          duration: 4000,
          panelClass: 'snack-error'
        })
      }
    }else if(!this.agentSignupForm.value.agree){
      this.matSnackbar.open('Please Agree to the Terms & Conditions', 'OK', {
        verticalPosition: 'top',
        duration: 4000,
        panelClass: 'snack-error'
      })
    }


  }


  onOtpChange(data: any) {
    this.otpData = data
  }

  verifyOtp() {
    if(this.otpData){
      let reqObj = {
        "agent_name": this.agentSignupForm.value.first_name + ' ' + this.agentSignupForm.value.last_name,
        "agent_type": this.agentSignupForm.value.agent_type,
        "email": this.agentSignupForm.value.email,
        "otp": this.otpData,
        "register_agent": true,
      }
      this.registrationService.verifyOtp(reqObj).subscribe(res => {
        if(res){
          localStorage.setItem('agent-data', JSON.stringify(res))
          localStorage.setItem('agent-token', res.token)
          this.router.navigate(['dashboard/profile'])
        }
      }, err=>{
        this.matSnackbar.open(err.error.error, 'OK', {
          verticalPosition: 'top',
          duration: 3000,
          panelClass: 'snack-error'
        })
      })
    }else{
      this.matSnackbar.open('Please enter OTP', 'OK',{
        verticalPosition: 'top',
        duration: 3000,
        panelClass: 'snack-error'
      })
    }
 
  }

  getCountries(): void {
    this.registrationService.getCountries().subscribe((data: any[]) => {
      this.countriesdata = data; 
      console.log(this.countriesdata); 
    });
  }
}
