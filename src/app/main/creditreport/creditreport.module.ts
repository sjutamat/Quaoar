import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CreditreportComponent } from './creditreport.component';

const routes = [
    {
        path     : 'creditreport',
        component: CreditreportComponent
    }
];

@NgModule({
    declarations: [
        CreditreportComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        CreditreportComponent
    ]
})

export class CreditreportModule
{
}
