import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerDialog, CustomerManagementComponent, EkycDialogeComponent } from './customer-management.component';




export const routes: any[] = [
    {
        path: '', component: CustomerManagementComponent
    },
];


@NgModule({
    declarations: [
        CustomerManagementComponent,
        AddCustomerDialog,
        EkycDialogeComponent    
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    
    ],
    providers: [
        DatePipe
    ],
})
export class CustomerManagementModule { }
