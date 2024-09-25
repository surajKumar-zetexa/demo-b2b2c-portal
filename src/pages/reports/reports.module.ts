import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DragDropModule } from '@angular/cdk/drag-drop'; 

export const routes: any[] = [
  {
      path: '', component: ReportsComponent
  },
];



@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    DragDropModule
  ]
})
export class ReportsModule { }
