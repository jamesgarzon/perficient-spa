import { NgModule } from '@angular/core';
import { FeaturesConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';
import { PrfI18nConfig } from './config/i18n.config';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
        },
      },
    }),
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
