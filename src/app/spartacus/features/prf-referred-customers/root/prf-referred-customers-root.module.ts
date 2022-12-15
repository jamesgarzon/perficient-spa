import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideConfigFactory } from '@spartacus/core';
import { prfReferredCustomerLayoutConfig, prfReferredCustomerRoutingConfig } from './config';
import { PRF_REFERRED_CUSTOMER_CORE_FEATURE, PRF_REFERRED_CUSTOMER_FEATURE } from './feature-name';
import { PrfReferredCustomersEventModule } from './events/prf-referred-customers-event.module';
import { PrfReferredCustomersI18nConfig } from './config/prf-referred-customers-i18n.config';

export function prfReferredCustomerComponentsConfig(): CmsConfig {
  return {
    featureModules: {
      [PRF_REFERRED_CUSTOMER_FEATURE]: {
        cmsComponents: ['AccountReferredCustomersComponent'],
      },
      // by default core is bundled together with components
      [PRF_REFERRED_CUSTOMER_CORE_FEATURE]: PRF_REFERRED_CUSTOMER_FEATURE,
    },
  };
}

@NgModule({
  providers: [
    provideConfig(prfReferredCustomerLayoutConfig),
    provideConfig(prfReferredCustomerRoutingConfig),
    provideConfig(PrfReferredCustomersI18nConfig),
    provideConfigFactory(prfReferredCustomerComponentsConfig),
  ],
  imports: [PrfReferredCustomersEventModule],
})
export class PrfReferredCustomersRootModule {}
