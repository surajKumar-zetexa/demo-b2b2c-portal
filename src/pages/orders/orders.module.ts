import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

export const routes: any[] = [
  {
      path: '', component: OrdersComponent
  },
];


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,

  ]
})
export class OrdersModule { }
