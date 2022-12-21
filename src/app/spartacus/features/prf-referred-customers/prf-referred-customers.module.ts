import { NgModule } from '@angular/core';
import { PrfReferredCustomersComponentsModule } from './components/prf-referred-customers-components.module';
import { PrfReferredCustomerOccModule } from './occ/prf-referred-customer-occ.module';
import { PrfReferredCustomerCoreModule } from './core/prf-referred-customer-core.module';

@NgModule({
  imports: [PrfReferredCustomerCoreModule, PrfReferredCustomersComponentsModule, PrfReferredCustomerOccModule],
})
export class PrfReferredCustomersModule {}
