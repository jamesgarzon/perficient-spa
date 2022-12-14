import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Card } from '@spartacus/storefront';
import { ReferredCustomer } from '../../root';
import { PrfReferredCustomerFacade } from '../../root/facade/prf-referred-customer-facade';

@Component({
  selector: 'app-prf-referred-customers-list',
  templateUrl: './prf-referred-customers-list.component.html',
  styleUrls: ['./prf-referred-customers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfReferredCustomersListComponent {
  referredCustomers$: Observable<ReferredCustomer[]> = this.referredCustomerService.getReferredCustomers();
  constructor(private translation: TranslationService, private referredCustomerService: PrfReferredCustomerFacade) {}
  getCardContent(referredCustomer: any): Observable<Card | null> {
    return combineLatest([
      this.translation.translate('common.delete'),
      this.translation.translate('common.edit'),
      this.translation.translate('addressBook.areYouSureToDeleteAddress'),
    ]).pipe(
      map(([textDelete, textEdit, textVerifyDeleteMsg]) => {
        const actions: { name: string; event: string }[] = [];
        actions.push({ name: textEdit, event: 'edit' });
        actions.push({ name: textDelete, event: 'delete' });

        return {
          textBold: referredCustomer.documentNumber,
          text: [
            referredCustomer.documentType,
            referredCustomer.firstName,
            referredCustomer.lastName,
            referredCustomer.email,
          ],
          actions: actions,
          deleteMsg: textVerifyDeleteMsg,
        } as Card;
      })
    );
  }
}
