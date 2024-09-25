import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export const routes: any[] = [
    {
        path: '', component: HomeComponent
    },
];


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FormsModule,
        CanvasJSAngularChartsModule
    ],
    providers: [],
})
export class HomeModule { }
