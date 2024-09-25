import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewAddressComponent, ShipingDetailsComponent } from './shiping-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


export const routes: any[] = [
  {
      path: '', component: ShipingDetailsComponent
  },
];


@NgModule({
  declarations: [
    ShipingDetailsComponent,
    AddNewAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
})
export class ShipingDetailsModule { }
