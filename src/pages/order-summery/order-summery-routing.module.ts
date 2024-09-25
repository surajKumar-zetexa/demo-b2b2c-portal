import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummeryComponent } from './order-summery.component';

const routes: Routes = [{ path: '', component: OrderSummeryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummeryRoutingModule { }
