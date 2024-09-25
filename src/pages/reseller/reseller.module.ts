import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResellerComponent,NewReseller } from './reseller.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const routes: any[] = [
  {
      path: '', component: ResellerComponent
  },
];

@NgModule({
  declarations: [
    ResellerComponent,
    NewReseller,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResellerModule { }
