import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfSplitBannerComponent } from './prf-split-banner.component';
import { MediaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [PrfSplitBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        TcSplitViewBannerComponent: {
          component: PrfSplitBannerComponent,
        },
      },
    }),
  ],
  exports: [PrfSplitBannerComponent],
})
export class PrfSplitBannerModule {}
