import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySimsComponent } from './buy-sims.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';


export const routes: any[] = [
  {
      path: '', component: BuySimsComponent
  },
];



@NgModule({
  declarations: [
    BuySimsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    NgxPaginationModule
    
  ]
})
export class BuySimsModule { }
