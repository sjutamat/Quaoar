import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CreatesetnumberComponent } from './createsetnumber.component';

const routes = [
    {
        path     : 'createsetnumber',
        component: CreatesetnumberComponent
    }
];

@NgModule({
    declarations: [
        CreatesetnumberComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        CreatesetnumberComponent
    ]
})

export class CreatesetnumberModule
{
}
