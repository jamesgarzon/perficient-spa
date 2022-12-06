import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { prfRoutingConfig, prfEndpointProductConfig } from './occ/config';
import { PrfProductOccModule } from './occ/prf-product-occ.module';

// load augmentations
import './model';
import { PrfProductComponentsModule } from './components/prf-product-components.module';

@NgModule({
  imports: [PrfProductOccModule, PrfProductComponentsModule],
  providers: [provideConfig(prfRoutingConfig), provideConfig(prfEndpointProductConfig)],
})
export class PrfProductModule {}
