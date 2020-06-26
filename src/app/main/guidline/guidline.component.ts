import { Component } from '@angular/core';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from '../i18n/en';
import { locale as thai } from '../i18n/th';

@Component({
  selector: 'app-guidline',
  templateUrl: './guidline.component.html',
  styleUrls: ['./guidline.component.scss']
})
export class GuidlineComponent {

   /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
      private _fuseTranslationLoaderService: FuseTranslationLoaderService
  )
  {
      this._fuseTranslationLoaderService.loadTranslations(english, thai);
  }

}
