import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrfProductInfoComponent } from './prf-product-info.component';
import { I18nModule, provideConfig } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

@NgModule({
  declarations: [PrfProductInfoComponent],
  imports: [CommonModule, I18nModule, StarRatingModule],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: PrfProductInfoComponent,
        },
      },
    }),
  ],
})
export class PrfProductInfoModule {}
