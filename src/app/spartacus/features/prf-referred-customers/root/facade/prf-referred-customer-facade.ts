import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../models';
import { PRF_REFERRED_CUSTOMER_CORE_FEATURE } from '../feature-name';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    facadeFactory({
      facade: PrfReferredCustomerFacade,
      feature: PRF_REFERRED_CUSTOMER_CORE_FEATURE,
      methods: ['getReferredCustomers'],
    }),
})
export abstract class PrfReferredCustomerFacade {
  abstract getReferredCustomers(): Observable<ReferredCustomer[]>;
}
