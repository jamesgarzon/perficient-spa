import { RoutesConfig, RoutingConfig } from '@spartacus/core';

export const defaultReferredCustomerRoutesConfig: RoutesConfig = {
  referredCustomers: { paths: ['my-account/referred-customers'] },
};

export const prfReferredCustomerRoutingConfig: RoutingConfig = {
  routing: {
    routes: defaultReferredCustomerRoutesConfig,
  },
};
