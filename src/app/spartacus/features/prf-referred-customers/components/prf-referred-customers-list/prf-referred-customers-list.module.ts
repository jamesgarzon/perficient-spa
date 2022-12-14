import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfReferredCustomersListComponent } from './prf-referred-customers-list.component';
import { CardModule } from '@spartacus/storefront';

@NgModule({
  declarations: [PrfReferredCustomersListComponent],
  imports: [
    CommonModule,
    CardModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        AccountReferredCustomersComponent: {
          component: PrfReferredCustomersListComponent,
          guards: [AuthGuard],
        },
      },
    }),
  ],
  exports: [PrfReferredCustomersListComponent],
})
export class PrfReferredCustomersListModule {}
