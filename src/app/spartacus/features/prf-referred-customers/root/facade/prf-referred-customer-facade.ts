import { Injectable } from '@angular/core';
import { facadeFactory, QueryState } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../models';
import { PRF_REFERRED_CUSTOMER_CORE_FEATURE } from '../feature-name';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    facadeFactory({
      facade: PrfReferredCustomerFacade,
      feature: PRF_REFERRED_CUSTOMER_CORE_FEATURE,
      methods: ['getReferredCustomers', 'getReferredCustomersState', 'deleteReferredCustomer'],
    }),
})
export abstract class PrfReferredCustomerFacade {
  abstract getReferredCustomers(): Observable<ReferredCustomer[]>;

  abstract getReferredCustomersState(): Observable<QueryState<ReferredCustomer[] | undefined>>;

  abstract deleteReferredCustomer(email: string): Observable<unknown>;
}
