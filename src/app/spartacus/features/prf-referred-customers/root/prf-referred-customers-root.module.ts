import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig, provideConfigFactory } from '@spartacus/core';
import { prfReferredCustomerLayoutConfig, prfReferredCustomerRoutingConfig } from './config';
import { PRF_REFERRED_CUSTOMER_CORE_FEATURE, PRF_REFERRED_CUSTOMER_FEATURE } from './feature-name';

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
    provideConfigFactory(prfReferredCustomerComponentsConfig),
  ],
})
export class PrfReferredCustomersRootModule {}
