import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEsimComponent, AddUserComponent, AssignConfirmDialogComponent, AssignDialogComponent, InventoryManagementComponent } from './inventory-management.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { CountryService } from '../providers/country.service';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'

export const routes: any[] = [
  {
      path: '', component: InventoryManagementComponent
  },
];


@NgModule({
  declarations: [
    InventoryManagementComponent,
    AssignDialogComponent,
    AssignConfirmDialogComponent,
    AddUserComponent,
    AddEsimComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  providers: [CountryService],
  bootstrap: [AddUserComponent]
})
export class InventoryManagementModule { }
