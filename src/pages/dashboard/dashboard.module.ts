import { NgModule } from '@angular/core';
import { DashboardComponent, EkycComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';
import { CustomerManagementModule } from '../customer-management/customer-management.module';


export const routes: any[] = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('../home/home.module').then(m => HomeModule) },
            { path: 'customer-management', loadChildren: () => import('../customer-management/customer-management.module').then(m => CustomerManagementModule) },
            { path: 'orders', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
            { path: 'inventory-management', loadChildren: () => import('../inventory-management/inventory-management.module').then(m => m.InventoryManagementModule) },
            { path: 'help-support', loadChildren: () => import('../help-support/help-support.module').then(m => m.HelpSupportModule) },
            { path: 'buy-sims', loadChildren: () => import('../buy-sims/buy-sims.module').then(m => m.BuySimsModule) },
            { path: 'buysim-details/:type/:name', loadChildren: () => import('../buysim-detailed/buysim-detailed.module').then(m => m.BuysimDetailedModule) },
            { path: 'wallet', loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletModule) },
            { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
            { path: 'shiping-details', loadChildren: () => import('../shiping-details/shiping-details.module').then(m => m.ShipingDetailsModule) },
            { path: 'order-summery', loadChildren: () => import('../order-summery/order-summery.module').then(m => m.OrderSummeryModule) },
            { path: 'order-placed', loadChildren: () => import('../order-placed/order-placed.module').then(m => m.OrderPlacedModule) },
            { path: 'reports', loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule) },
            { path: 'resellers', loadChildren: () => import('../reseller/reseller.module').then(m => m.ResellerModule) },

        ]
    },

];


@NgModule({
    declarations: [
        DashboardComponent,
        EkycComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FormsModule

    ],
    providers: [],
})
export class DashboardModule { }
