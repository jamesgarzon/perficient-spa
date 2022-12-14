import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Query, QueryService, QueryState, UserIdService } from '@spartacus/core';
import { PrfReferredCustomerFacade } from '../../root/facade/prf-referred-customer-facade';
import { ReferredCustomer } from '@prf-features/prf-referred-customers/root';
import { map, switchMap, take } from 'rxjs/operators';
import { PrfReferredCustomerAdapter } from '../connectors';

@Injectable()
export class PrfReferredCustomerService implements PrfReferredCustomerFacade {
  constructor(
    protected userIdService: UserIdService,
    protected queryService: QueryService,
    protected prfReferredCustomerAdapter: PrfReferredCustomerAdapter
  ) {}

  getReferredCustomersState(): Observable<QueryState<ReferredCustomer[] | undefined>> {
    return this.referredCustomersQuery.getState();
  }

  getReferredCustomers(): Observable<ReferredCustomer[]> {
    return this.getReferredCustomersState().pipe(map((state) => state.data ?? []));
  }

  protected referredCustomersQuery: Query<ReferredCustomer[]> = this.queryService.create(() =>
    this.userIdService.getUserId().pipe(
      take(1),
      switchMap((userId) => this.prfReferredCustomerAdapter.getReferredCustomers(userId))
    )
  );
}
