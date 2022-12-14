import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { prfReferredCustomerEndpointConfig } from './config/prf-referred-customers-endpoint-config';
import './models';
import { PrfReferredCustomerAdapter } from '@prf-features/prf-referred-customers/core';
import { OccPrfReferredCustomerAdapterService } from './adapters';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(prfReferredCustomerEndpointConfig),
    {
      provide: PrfReferredCustomerAdapter,
      useClass: OccPrfReferredCustomerAdapterService,
    },
  ],
})
export class PrfReferredCustomerOccModule {}
