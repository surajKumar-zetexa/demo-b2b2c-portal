import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPlacedComponent } from './order-placed.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


export const routes: any[] = [
  {
      path: '', component: OrderPlacedComponent
  },
];



@NgModule({
  declarations: [
    OrderPlacedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
})
export class OrderPlacedModule { }
