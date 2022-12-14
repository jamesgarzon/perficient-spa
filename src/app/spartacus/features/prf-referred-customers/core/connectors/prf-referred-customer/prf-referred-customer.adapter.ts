import { Observable } from 'rxjs';
import { ReferredCustomer } from '@prf-features/prf-referred-customers';

export abstract class PrfReferredCustomerAdapter {
  protected constructor() {}

  /**
   * Gets the referred customers for the given user
   * @param userId user id
   */
  abstract getReferredCustomers(userId: string): Observable<ReferredCustomer[]>;
}
