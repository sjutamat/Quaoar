import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';
import { FuseHighlightModule } from '@fuse/components';
import { TranslateModule } from '@ngx-translate/core';
import { LotteryComponent } from 'app/main/lottery/lottery.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
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
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        NgxChartsModule,

        FuseSharedModule,
        FuseDemoModule,
        FuseHighlightModule,
    ]
})
export class LotteryModule
{
}
