import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpSupportComponent } from './help-support.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


export const routes: any[] = [
  {
      path: '', component: HelpSupportComponent
  },
];


@NgModule({
  declarations: [
    HelpSupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ]
})
export class HelpSupportModule { }
