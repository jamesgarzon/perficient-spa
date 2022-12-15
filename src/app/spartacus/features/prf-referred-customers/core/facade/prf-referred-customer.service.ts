import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, CommandService, EventService, Query, QueryService, QueryState, UserIdService } from '@spartacus/core';
import { PrfReferredCustomerFacade } from '../../root/facade/prf-referred-customer-facade';
import { ReferredCustomer } from '@prf-features/prf-referred-customers/root';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { PrfReferredCustomerAdapter } from '../connectors';
import {
  DeleteReferredCustomersEvent,
  LoadReferredCustomersEvent,
} from '../../root/events/prf-referred-customers.events';

@Injectable()
export class PrfReferredCustomerService implements PrfReferredCustomerFacade {
  constructor(
    protected userIdService: UserIdService,
    protected queryService: QueryService,
    protected commandService: CommandService,
    protected prfReferredCustomerAdapter: PrfReferredCustomerAdapter,
    protected eventService: EventService
  ) {}

  deleteReferredCustomer(email: string): Observable<unknown> {
    return this.deleteReferredCustomerCommand.execute({ email });
  }

  getReferredCustomersState(): Observable<QueryState<ReferredCustomer[] | undefined>> {
    return this.referredCustomersQuery.getState();
  }

  getReferredCustomers(): Observable<ReferredCustomer[]> {
    return this.getReferredCustomersState().pipe(map((state) => state.data ?? []));
  }

  protected referredCustomersQuery: Query<ReferredCustomer[]> = this.queryService.create(
    () =>
      this.userIdService.getUserId().pipe(
        take(1),
        switchMap((userId) => this.prfReferredCustomerAdapter.getReferredCustomers(userId))
      ),
    {
      reloadOn: [LoadReferredCustomersEvent],
    }
  );

  protected deleteReferredCustomerCommand: Command<{ email: string }> = this.commandService.create<{ email: string }>(
    ({ email }) => {
      return this.userIdService.getUserId().pipe(
        take(1),
        switchMap((userId) => this.prfReferredCustomerAdapter.deleteReferredCustomer(userId, email)),
        tap(() => {
          this.eventService.dispatch({ email }, DeleteReferredCustomersEvent);
        })
      );
    }
  );
}
