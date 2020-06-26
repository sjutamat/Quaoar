import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { LotteryComponent } from './lottery.component';

const routes = [
    {
        path     : 'lottery',
        component: LotteryComponent
    }
];

@NgModule({
    declarations: [
        LotteryComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        LotteryComponent
    ]
})

export class LotteryModule
{
}
