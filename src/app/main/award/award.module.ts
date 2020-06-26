import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { AwardComponent } from './award.component';

const routes = [
    {
        path     : 'award',
        component: AwardComponent
    }
];

@NgModule({
    declarations: [
        AwardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        AwardComponent
    ]
})

export class AwardModule
{
}
