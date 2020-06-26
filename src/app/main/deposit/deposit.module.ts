import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { DepositComponent } from './deposit.component';

const routes = [
    {
        path     : 'deposit',
        component: DepositComponent
    }
];

@NgModule({
    declarations: [
        DepositComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        DepositComponent
    ]
})

export class DepositModule
{
}
