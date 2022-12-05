import { NgModule } from '@angular/core';
import { FeaturesConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders } from '@spartacus/storefront';
import { environment } from '../../environments/environment';
import {
  prfMediaConfig,
  PrfIconConfig,
  prfPWAModuleConfig,
  prfLayoutConfig,
  PrfI18nConfig,
  prfRoutingConfig,
  PrfCmsContentProviders,
} from '@prf-config';

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
      // context: {
      //   currency: ['USD'],
      //   language: ['en', 'de'],
      //   baseSite: ['electronics-spa'],
      //   customParam: ['test'],
      //   urlParameters: ['customParam', 'baseSite', 'language', 'currency'],
      // },
    }),
    provideConfig(PrfI18nConfig),
    provideConfig(PrfIconConfig),
    provideConfig(prfRoutingConfig),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
    ...PrfCmsContentProviders,
  ],
})
export class SpartacusConfigurationModule {}
