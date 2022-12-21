import { NgModule } from '@angular/core';
import { PrfReferredCustomersListModule } from './prf-referred-customers-list';
import { PrfReferredCustomersComponentModule } from './prf-referred-customers';

@NgModule({
  imports: [PrfReferredCustomersComponentModule, PrfReferredCustomersListModule],
})
export class PrfReferredCustomersComponentsModule {}
