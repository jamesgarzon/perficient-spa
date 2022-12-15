import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrfReferredCustomersListComponent } from './prf-referred-customers-list.component';
import { CardModule, SpinnerModule } from '@spartacus/storefront';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [PrfReferredCustomersListComponent],
  imports: [CommonModule, CardModule, SpinnerModule, I18nModule],
  exports: [PrfReferredCustomersListComponent],
})
export class PrfReferredCustomersListModule {}
