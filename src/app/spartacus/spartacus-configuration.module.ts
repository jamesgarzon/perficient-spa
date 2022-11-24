import { NgModule } from '@angular/core';
import { FeaturesConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders } from '@spartacus/storefront';
import { PrfI18nConfig } from './config/i18n.config';
import { environment } from '../../environments/environment';
import { PrfIconConfig } from './config/icon.config';
import { prfLayoutConfig } from './config/layout-config';
import { prfMediaConfig } from './config/media.config';
import { prfPWAModuleConfig } from './config/pwa.config';

const occConfig: OccConfig = {
  backend: {
    occ: {
      ...(environment?.occBaseUrl ? { baseUrl: environment.occBaseUrl } : {}),
      prefix: environment?.prefix ? environment.prefix : '/occ/v2/',
    },
  },
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(prfLayoutConfig),
    provideConfig(prfMediaConfig),
    provideConfig(prfPWAModuleConfig),
    ...defaultCmsContentProviders,
    provideConfig(occConfig),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en', 'de'],
        baseSite: ['electronics-spa'],
        // urlParameters: ['baseSite', 'language', 'currency'],
      },
    }),
    provideConfig(PrfI18nConfig),
    provideConfig(PrfIconConfig),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
