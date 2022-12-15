import { Injectable } from '@angular/core';
import { ConverterService, OccEndpointsService } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { PrfReferredCustomerAdapter } from '../../core';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../root';
import { pluck } from 'rxjs/operators';
import { OccReferredCustomerData } from '../models';
import { REFERRED_CUSTOMER_NORMALIZER } from '../../core/connectors/prf-referred-customer/converters';

@Injectable({
  providedIn: 'root',
})
export class OccPrfReferredCustomerAdapterService implements PrfReferredCustomerAdapter {
  constructor(
    private occEndpoints: OccEndpointsService,
    private http: HttpClient,
    private converter: ConverterService
  ) {}

  getReferredCustomersEndpoint(userId: string): string {
    return this.occEndpoints.buildUrl('referredCustomers', { urlParams: { userId } });
  }

  getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.http
      .get<OccReferredCustomerData>(this.getReferredCustomersEndpoint(userId))
      .pipe(pluck('referredCustomers'), this.converter.pipeableMany(REFERRED_CUSTOMER_NORMALIZER));
  }
}
