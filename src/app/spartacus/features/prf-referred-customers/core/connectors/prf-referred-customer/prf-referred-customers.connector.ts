import { Injectable } from '@angular/core';

import { ReferredCustomer } from '../../../root';
import { Observable } from 'rxjs';
import { PrfReferredCustomersAdapter } from './prf-referred-customers.adapter';

@Injectable()
export class PrfReferredCustomersConnector {
  constructor(protected adapter: PrfReferredCustomersAdapter) {}

  public getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.adapter.getReferredCustomers(userId);
  }

  public deleteReferredCustomer(userId: string, email: string): Observable<unknown> {
    return this.adapter.deleteReferredCustomer(userId, email);
  }
}
