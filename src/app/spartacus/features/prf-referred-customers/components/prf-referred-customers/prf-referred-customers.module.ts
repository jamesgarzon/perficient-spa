import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfReferredCustomersComponent } from './prf-referred-customers.component';
import { PrfReferredCustomersListModule } from '../prf-referred-customers-list';

@NgModule({
  declarations: [PrfReferredCustomersComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        AccountReferredCustomersComponent: {
          component: PrfReferredCustomersComponent,
          guards: [AuthGuard],
        },
      },
    }),
    PrfReferredCustomersListModule,
  ],
  exports: [PrfReferredCustomersComponent],
})
export class PrfReferredCustomersComponentModule {}
