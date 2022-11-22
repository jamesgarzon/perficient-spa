import { NgModule } from '@angular/core';
import { FeaturesConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders, mediaConfig } from '@spartacus/storefront';
import { PrfI18nConfig } from './config/i18n.config';
import { environment } from '../../environments/environment';
import { PrfIconConfig } from './config/icon.config';
import { prfLayoutConfig } from './config/layout-config';

const occConfig: OccConfig = {
  backend: {
    occ: {
      ...(environment.occBaseUrl ? { baseUrl: environment.occBaseUrl } : {}),
      prefix: environment.prefix ? environment.prefix : '/occ/v2/',
    },
  },
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(prfLayoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(occConfig),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en', 'de'],
        baseSite: ['electronics-spa'],
        urlParameters: ['baseSite', 'language', 'currency'],
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
