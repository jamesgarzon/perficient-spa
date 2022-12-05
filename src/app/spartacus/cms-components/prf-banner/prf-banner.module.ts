import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfBannerComponent } from './prf-banner.component';

@NgModule({
  declarations: [PrfBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        PrfBannerComponent: {
          component: PrfBannerComponent,
        },
      },
    }),
  ],
  exports: [PrfBannerComponent],
})
export class PrfBannerModule {}
