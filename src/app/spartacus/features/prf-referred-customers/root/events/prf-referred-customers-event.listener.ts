import { Injectable, OnDestroy } from '@angular/core';
import { EventService, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { DeleteReferredCustomersEvent, LoadReferredCustomersEvent } from './prf-referred-customers.events';

/**
 * Referred customer event listener.
 */
@Injectable({
  providedIn: 'root',
})
export class PrfReferredCustomersEventListener implements OnDestroy {
  protected subscriptions = new Subscription();

  constructor(protected eventService: EventService, protected globalMessageService: GlobalMessageService) {
    this.onReferredCustomerDeleted();
  }

  protected onReferredCustomerDeleted(): void {
    this.subscriptions.add(
      this.eventService.get(DeleteReferredCustomersEvent).subscribe(({ email }) => {
        this.eventService.dispatch({}, LoadReferredCustomersEvent);

        this.globalMessageService.add(
          { key: 'referredCustomers.deletedSuccessfully', params: { email } },
          GlobalMessageType.MSG_TYPE_INFO
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
