import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { map, take } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Card, LAUNCH_CALLER, LaunchDialogService } from '@spartacus/storefront';
import { ReferredCustomer } from '../../root';
import { PrfReferredCustomerFacade } from '../../root/facade/prf-referred-customer-facade';

@Component({
  selector: 'prf-referred-customers-list',
  templateUrl: './prf-referred-customers-list.component.html',
  styleUrls: ['./prf-referred-customers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfReferredCustomersListComponent {
  referredCustomers$: Observable<ReferredCustomer[]> = this.referredCustomerService.getReferredCustomers();

  constructor(
    private translation: TranslationService,
    private referredCustomerService: PrfReferredCustomerFacade,
    protected launchDialogService: LaunchDialogService
  ) {}

  getCardContent(referredCustomer: any): Observable<Card | null> {
    return combineLatest([this.translation.translate('common.delete'), this.translation.translate('common.edit')]).pipe(
      map(([textDelete, textEdit]) => {
        const actions: { name: string; event: string }[] = [];
        actions.push({ name: textEdit, event: 'edit' });
        actions.push({ name: textDelete, event: 'delete' });

        return {
          textBold: referredCustomer.documentNumber,
          text: [referredCustomer.documentType, referredCustomer.fullName, referredCustomer.email],
          actions: actions,
        } as Card;
      })
    );
  }

  deleteReferredCustomer(email: string) {
    this.launchDialogService.openDialog(LAUNCH_CALLER.FULLSCREEN_SPINNER)?.pipe(take(1)).subscribe();

    this.referredCustomerService.deleteReferredCustomer(email).subscribe({
      complete: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      },
    });
  }

  onSuccess() {
    this.launchDialogService.closeDialog(LAUNCH_CALLER.FULLSCREEN_SPINNER);
  }

  onError() {
    this.launchDialogService.closeDialog(LAUNCH_CALLER.FULLSCREEN_SPINNER);
  }
}
