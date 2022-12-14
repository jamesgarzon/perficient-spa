import { OccConfig } from '@spartacus/core';

export const prfReferredCustomerEndpointConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        referredCustomers: '/users/${userId}/referredcustomers',
      },
    },
  },
};
