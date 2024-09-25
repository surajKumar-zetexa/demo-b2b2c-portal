import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgentLcmService, RegionLcmService, UserLcmService } from 'src/app/api/services';
import { RegistrationLcmService } from 'src/app/register/services';
import { UserLoginService } from 'src/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public agentLoginForm!: FormGroup;

  public otpFlag: boolean = false;
  public showResendFlag: boolean = false;
  public otpData:any;
  

 public otp!: string; showOtpComponent = true;
  // @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  // public config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, };
  // constructor(public router: Router, public formBuilder: FormBuilder, public registrationService: UserLoginService,
  //    public userService: AgentLcmService,  public matSnackbar: MatSnackBar) {

  // }

  ngOnInit(): void {
    // this.agentLoginForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    //   agent_type: ['', Validators.required],
    //   agree:[false]
    // })
  }

  
  // login() {
  //   if(this.agentLoginForm.valid && this.agentLoginForm.value.agree){
  //     let reqObj = {
  //       "agent_type":  this.agentLoginForm.value.agent_type,
  //       "email":  this.agentLoginForm.value.email,
  //       "register_agent": false
  //     }
  //     this.registrationService.userSignup(reqObj).subscribe(res=>{
  //   this.otpFlag = true
  //   this.showResendFlag = false
  //     }, err=>{
  //       this.matSnackbar.open(err.error.error, 'OK', {
  //         verticalPosition: 'top',
  //         duration: 4000,
  //         panelClass: 'snack-error'
  //       })
  //     })
  //   }else if(!this.agentLoginForm.valid){
  //     if(this.agentLoginForm.get('email')?.hasError('required')){
  //       this.matSnackbar.open('Please enter Email', 'OK', {
  //         verticalPosition: 'top',
  //         duration: 4000,
  //         panelClass: 'snack-error'
  //       })
  //     }else if(this.agentLoginForm.get('email')?.hasError('pattern')){
  //       this.matSnackbar.open('Please enter valid Email', 'OK', {
  //         verticalPosition: 'top',
  //         duration: 4000,
  //         panelClass: 'snack-error'
  //       })
  //     }else if(this.agentLoginForm.get('agent_type')?.hasError('required')){
  //       this.matSnackbar.open('Please Select Agent Type', 'OK', {
  //         verticalPosition: 'top',
  //         duration: 4000,
  //         panelClass: 'snack-error'
  //       })
  //     }
     
  //   }else if(!this.agentLoginForm.value.agree){
  //     this.matSnackbar.open('Please Agree to the Terms & Conditions', 'OK', {
  //       verticalPosition: 'top',
  //       duration: 4000,
  //       panelClass: 'snack-error'
  //     })
  //   }

    
  // }

  // handleEvent(ev:any) {
  //   if(ev.action == 'done') {
  //     this.showResendFlag = true
  //   }
  // }


  // onOtpChange(data: any) {
  //   this.otpData = data
  // }

  // verifyOtp() {
  //   // this.router.navigate(['dashboard/home'])
  //   if(this.otpData){
  //     let reqObj = {
  //       // "agent_name": this.agentLoginForm.value.first_name + ' ' +  this.agentLoginForm.value.last_name,
  //       "agent_type":  this.agentLoginForm.value.agent_type,
  //       "email":  this.agentLoginForm.value.email,
  //       "otp": parseInt(this.otpData),
  //       "register_agent": false
  //     }
  //     this.registrationService.verifyOtp(reqObj).subscribe(res=>{
  //       if(res){
  //         localStorage.setItem('agent-data', JSON.stringify(res))
  //         localStorage.setItem('agent-token', res.token)
  //         if(!res.agent.ekyc_completed){
  //         this.router.navigate(['dashboard/profile'])
  
  //         }else{
  //         this.router.navigate(['dashboard/home'])
  
  //         }
  //       }
  //     }, err=>{
  //       this.matSnackbar.open(err.error.error, 'OK', {
  //         verticalPosition: 'top',
  //         duration: 3000,
  //         panelClass: 'snack-error'
  //       })
  //     })
  //   }else{
  //     this.matSnackbar.open('Please enter OTP', 'OK',{
  //       verticalPosition: 'top',
  //       duration: 3000,
  //       panelClass: 'snack-error'
  //     })
  //   }
   
  // }


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
  };

  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }



}
