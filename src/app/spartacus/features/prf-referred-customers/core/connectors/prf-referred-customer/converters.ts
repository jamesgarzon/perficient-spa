import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { ReferredCustomer } from '../../../root';
import { OccReferredCustomer } from '@prf-features/prf-referred-customers/occ/models';

export const REFERRED_CUSTOMER_NORMALIZER = new InjectionToken<Converter<OccReferredCustomer, ReferredCustomer>>(
  'ReferredCustomerNormalizer'
);
