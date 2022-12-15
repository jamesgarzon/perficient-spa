import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Get referred customers endpoint
     */
    referredCustomers?: string | OccEndpoint;
    /**
     * Delete referred customers endpoint
     */
    deleteReferredCustomer?: string | OccEndpoint;
  }
}
