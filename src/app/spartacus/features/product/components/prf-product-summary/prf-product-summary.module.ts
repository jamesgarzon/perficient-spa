import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrfProductSummaryComponent } from './prf-product-summary.component';
import { I18nModule, provideConfig } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

@NgModule({
  declarations: [PrfProductSummaryComponent],
  imports: [CommonModule, I18nModule, StarRatingModule],
  providers: [
    provideConfig({
      cmsComponents: {
        ProductSummaryComponent: {
          component: PrfProductSummaryComponent,
        },
      },
    }),
  ],
})
export class PrfProductSummaryModule {}
