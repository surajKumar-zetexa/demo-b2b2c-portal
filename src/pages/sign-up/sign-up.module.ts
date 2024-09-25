import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export const routes: any[] = [
  {
      path: '', component: SignUpComponent
  },
];


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule ,
    NgOtpInputModule,
    SlickCarouselModule
  ]
})
export class SignUpModule { }
