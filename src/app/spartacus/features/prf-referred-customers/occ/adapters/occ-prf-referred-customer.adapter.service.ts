import { Injectable } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { PrfReferredCustomerAdapter } from '../../core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../root';
import { pluck } from 'rxjs/operators';
import { PrfOccReferredCustomer } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OccPrfReferredCustomerAdapterService implements PrfReferredCustomerAdapter {
  constructor(private occEndpoints: OccEndpointsService, private http: HttpClient) {}

  getReferredCustomersEndpoint(userId: string): string {
    return this.occEndpoints.buildUrl('referredCustomers', { urlParams: { userId } });
  }

  getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.http
      .get<PrfOccReferredCustomer>(this.getReferredCustomersEndpoint(userId))
      .pipe(pluck('referredCustomers'));
  }
}
