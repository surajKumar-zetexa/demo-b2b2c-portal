import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgOtpInputModule } from 'ng-otp-input';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountdownComponent, CountdownModule } from 'ngx-countdown';


export const routes: any[] = [
  {
      path: '', component: LoginComponent
  },
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule ,
    NgOtpInputModule,
    SlickCarouselModule,
    CountdownComponent, CountdownModule 
  ]
})
export class LoginModule { }
