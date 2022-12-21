import { NgModule } from '@angular/core';
import { facadeProviders } from './facade/facade-providers';
import { PrfReferredCustomersConnector } from './connectors';

@NgModule({
  providers: [PrfReferredCustomersConnector, ...facadeProviders],
})
export class PrfReferredCustomerCoreModule {}
