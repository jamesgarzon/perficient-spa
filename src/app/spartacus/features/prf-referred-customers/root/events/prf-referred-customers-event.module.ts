import { NgModule } from '@angular/core';
import { PrfReferredCustomersEventListener } from './prf-referred-customers-event.listener';

@NgModule({})
export class PrfReferredCustomersEventModule {
  constructor(_prfReferredCustomerEventListener: PrfReferredCustomersEventListener) {
    // Intentional empty constructor
  }
}
