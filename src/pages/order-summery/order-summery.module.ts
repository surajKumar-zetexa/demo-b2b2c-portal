import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummeryComponent } from './order-summery.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


export const routes: any[] = [
  {
      path: '', component: OrderSummeryComponent,
  },
];



@NgModule({
  declarations: [
    OrderSummeryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
})
export class OrderSummeryModule { }
