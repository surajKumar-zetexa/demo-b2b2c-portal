import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardDetailsComponent, AddMoneyComponent, WalletComponent } from './wallet.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const routes: any[] = [
  {
      path: '', component: WalletComponent
  },
];


@NgModule({
  declarations: [
    WalletComponent,
    AddCardDetailsComponent,
    AddMoneyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [WalletComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WalletModule { }
