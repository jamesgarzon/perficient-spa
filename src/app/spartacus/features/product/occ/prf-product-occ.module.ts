import { NgModule } from '@angular/core';
import { PRODUCT_NORMALIZER } from '@spartacus/core';
import { PrfProductNameNormalizerService, PrfProductCategoryNormalizerService } from './adapters/converters';

@NgModule({
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: PrfProductNameNormalizerService,
      multi: true,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: PrfProductCategoryNormalizerService,
      multi: true,
    },
  ],
})
export class PrfProductOccModule {}
