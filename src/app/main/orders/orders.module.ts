import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { OrdersComponent } from './orders.component';

const routes = [
    {
        path     : 'orders',
        component: OrdersComponent
    }
];

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        OrdersComponent
    ]
})

export class OrdersModule
{
}
