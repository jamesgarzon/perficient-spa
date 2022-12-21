import { NgModule } from '@angular/core';
import { PrfBannerModule } from './prf-banner/prf-banner.module';
import { PrfSplitBannerModule } from './prf-split-banner';

@NgModule({
  imports: [PrfBannerModule, PrfSplitBannerModule],
})
export class PrfCmsComponentsModule {}
