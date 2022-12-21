import { Provider } from '@angular/core';
import { PrfReferredCustomerService } from './prf-referred-customer.service';
import { PrfReferredCustomerFacade } from '../../root/facade/prf-referred-customer-facade';

export const facadeProviders: Provider[] = [
  {
    provide: PrfReferredCustomerFacade,
    useClass: PrfReferredCustomerService,
  },
];
