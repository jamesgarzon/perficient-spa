import { NgModule } from '@angular/core';
import { PrfNewsComponentsModule } from './components/prf-news-components.module';
import { provideConfig } from '@spartacus/core';
import { PrfNewsI18nConfig } from './config/prf-news-i18n.config';

@NgModule({
  imports: [PrfNewsComponentsModule],
  providers: [provideConfig(PrfNewsI18nConfig)],
})
export class PrfNewsModule {}
