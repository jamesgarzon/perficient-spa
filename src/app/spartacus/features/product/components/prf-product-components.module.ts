import { NgModule } from '@angular/core';
import { PrfProductInfoModule } from './prf-product-info/prf-product-info.module';
import { PrfProductSummaryModule } from './prf-product-summary/prf-product-summary.module';

@NgModule({
  imports: [PrfProductInfoModule, PrfProductSummaryModule],
})
export class PrfProductComponentsModule {}
