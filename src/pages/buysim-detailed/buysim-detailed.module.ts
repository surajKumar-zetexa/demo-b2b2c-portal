import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuysimDetailedComponent, CartDialogeComponent,  } from './buysim-detailed.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

export const routes: any[] = [
  {
      path: '', component: BuysimDetailedComponent
  },
];



@NgModule({
  declarations: [
    BuysimDetailedComponent,
    CartDialogeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
  
})
export class BuysimDetailedModule { }
