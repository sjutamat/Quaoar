import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { HomeModule } from 'app/main/home/home.module';
import { LotteryModule } from 'app/main/lottery/lottery.module';
import { AwardModule } from 'app/main/award/award.module';
import { OrdersModule } from 'app/main/orders/orders.module';
import { DepositModule } from 'app/main/deposit/deposit.module';
import { CreditreportModule } from 'app/main/creditreport/creditreport.module';
import { GuidlineModule } from 'app/main/guidline/guidline.module';
import { CreatesetnumberModule } from 'app/main/createsetnumber/createsetnumber.module';

const appRoutes: Routes = [
    {
        path      : '**', redirectTo: 'home'
    }
];

@NgModule({
    declarations: [
        AppComponent,
       
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules

        LayoutModule,
        SampleModule,
        HomeModule,
        LotteryModule,
        AwardModule,
        OrdersModule,
        DepositModule,
        CreditreportModule,
        GuidlineModule,
        CreatesetnumberModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
