import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { GuidlineComponent } from './guidline.component';

const routes = [
    {
        path     : 'guidline',
        component: GuidlineComponent
    }
];

@NgModule({
    declarations: [
        GuidlineComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        GuidlineComponent
    ]
})

export class GuidlineModule
{
}
