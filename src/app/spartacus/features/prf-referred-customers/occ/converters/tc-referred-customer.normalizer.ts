import { Injectable } from '@angular/core';
import { Converter } from '@spartacus/core';
import { ReferredCustomer } from '../../root';
import { OccReferredCustomer } from '../models';

/**
 * Referred customer normalizer for OCC request
 */
@Injectable({ providedIn: 'root' })
export class PrReferredCustomerNormalizer implements Converter<OccReferredCustomer, ReferredCustomer> {
  convert(source: OccReferredCustomer, target?: ReferredCustomer): ReferredCustomer {
    if (target === undefined) {
      target = { ...source } as ReferredCustomer;
    }

    target.fullName = `${target?.firstName || ''} ${target?.lastName || ''}`;
    return target;
  }
}
