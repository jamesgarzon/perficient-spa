import { NgModule } from '@angular/core';
import { PrfNewsComponent } from './prf-news.component';
import { I18nModule, provideConfig } from '@spartacus/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PrfNewsComponent],
  exports: [PrfNewsComponent],
  providers: [
    provideConfig({
      cmsComponents: {
        headline: {
          component: PrfNewsComponent,
        },
      },
    }),
  ],
  imports: [CommonModule, I18nModule],
})
export class PrfNewsComponentModule {}
