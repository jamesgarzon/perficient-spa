import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { prfRoutingConfig, prfEndpointProductConfig } from './occ/config';
import { PrfProductOccModule } from './occ/prf-product-occ.module';

// load augmentations
import './model';

@NgModule({
  imports: [PrfProductOccModule],
  providers: [provideConfig(prfRoutingConfig), provideConfig(prfEndpointProductConfig)],
})
export class PrfProductModule {}
