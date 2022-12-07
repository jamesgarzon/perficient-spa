import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfReferredCustomersSplitBannerComponent } from './prf-referred-customers-split-banner.component';

@NgModule({
  declarations: [PrfReferredCustomersSplitBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        TcSplitViewBannerComponent: {
          component: PrfReferredCustomersSplitBannerComponent,
        },
      },
    }),
  ],
  exports: [PrfReferredCustomersSplitBannerComponent],
})
export class PrfReferredCustomersSplitBannerModule {}
