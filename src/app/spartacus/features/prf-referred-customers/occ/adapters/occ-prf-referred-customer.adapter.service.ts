import { Injectable } from '@angular/core';
import { ConverterService, normalizeHttpError, OccEndpointsService } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { PrfReferredCustomerAdapter } from '../../core';
import { Observable, throwError } from 'rxjs';
import { ReferredCustomer } from '../../root';
import { catchError, pluck } from 'rxjs/operators';
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

  getDeleteReferredCustomerEndpoint(userId: string, email: string): string {
    return this.occEndpoints.buildUrl('deleteReferredCustomer', { urlParams: { userId, email } });
  }

  getReferredCustomers(userId: string): Observable<ReferredCustomer[]> {
    return this.http.get<OccReferredCustomerData>(this.getReferredCustomersEndpoint(userId)).pipe(
      catchError((error) => throwError(normalizeHttpError(error))),
      pluck('referredCustomers'),
      this.converter.pipeableMany(REFERRED_CUSTOMER_NORMALIZER)
    );
  }

  deleteReferredCustomer(userId: string, email: string): Observable<unknown> {
    return this.http
      .delete(this.getDeleteReferredCustomerEndpoint(userId, email))
      .pipe(catchError((error) => throwError(normalizeHttpError(error))));
  }
}
