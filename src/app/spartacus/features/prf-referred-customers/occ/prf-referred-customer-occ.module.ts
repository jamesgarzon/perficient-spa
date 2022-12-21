import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { prfReferredCustomerEndpointConfig } from './config/prf-referred-customers-endpoint-config';
import { PrfReferredCustomersAdapter } from '@prf-features/prf-referred-customers/core';
import { OccPrfReferredCustomerAdapterService } from './adapters';
import { REFERRED_CUSTOMER_NORMALIZER } from '../core/connectors/prf-referred-customer/converters';
import { PrReferredCustomerNormalizer } from './converters/tc-referred-customer.normalizer';
import './models';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(prfReferredCustomerEndpointConfig),
    {
      provide: PrfReferredCustomersAdapter,
      useClass: OccPrfReferredCustomerAdapterService,
    },
    {
      provide: REFERRED_CUSTOMER_NORMALIZER,
      useExisting: PrReferredCustomerNormalizer,
      multi: true,
    },
  ],
})
export class PrfReferredCustomerOccModule {}
