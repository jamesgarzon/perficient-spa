import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { PrfReferredCustomersListComponent } from './prf-referred-customers-list.component';

@NgModule({
  declarations: [PrfReferredCustomersListComponent],
  imports: [
    CommonModule,
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
