import { NgModule } from '@angular/core';
import { PrfNewsComponent } from './prf-news.component';
import { I18nModule, provideConfig } from '@spartacus/core';

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
  imports: [I18nModule],
})
export class PrfNewsComponentModule {}
