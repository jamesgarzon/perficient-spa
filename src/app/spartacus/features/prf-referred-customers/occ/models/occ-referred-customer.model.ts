export interface OccReferredCustomer {
  email?: string;
  documentTypeCode?: string;
  documentType?: string;
  documentNumber?: string;
  firstName?: string;
  lastName?: string;
}

export interface OccReferredCustomerData {
  referredCustomers: OccReferredCustomer[];
}
