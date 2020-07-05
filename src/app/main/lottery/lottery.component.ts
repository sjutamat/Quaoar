import { Component, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';

import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';

@Component({
    selector     : 'lottery',
    templateUrl  : './lottery.component.html',
    styleUrls    : ['./lottery.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LotteryComponent
{
    view: string;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
   

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        // Set the defaults
        this._fuseTranslationLoaderService.loadTranslations(english, thai);
        this.view = 'preview';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the view
     */
    toggleView(): void
    {
        if ( this.view === 'preview' )
        {
            this.view = 'source';
        }
        else
        {
            this.view = 'preview';
        }
    }
}
