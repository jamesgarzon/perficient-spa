import { NgModule } from '@angular/core';
import { FeaturesConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';
import { PrfI18nConfig } from './config/i18n.config';
import { environment } from '../../environments/environment';

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
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(occConfig),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en', 'de'],
        baseSite: ['electronics-spa'],
      },
    }),
    provideConfig(PrfI18nConfig),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
