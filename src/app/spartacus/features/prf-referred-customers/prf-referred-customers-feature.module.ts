import { NgModule } from '@angular/core';
import { PrfReferredCustomersRootModule } from './root/prf-referred-customers-root.module';
import { provideConfig } from '@spartacus/core';
import { PRF_REFERRED_CUSTOMER_FEATURE } from './root/feature-name';

@NgModule({
  imports: [PrfReferredCustomersRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [PRF_REFERRED_CUSTOMER_FEATURE]: {
          module: () => import('./prf-referred-customers.module').then((m) => m.PrfReferredCustomersModule),
        },
      },
    }),
  ],
})
export class PrfReferredCustomersFeatureModule {}
