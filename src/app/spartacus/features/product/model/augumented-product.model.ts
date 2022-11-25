import '@spartacus/core';

declare module '@spartacus/core' {
  export interface Product {
    nameForUrl?: string;
    firstCategory?: string;
  }
}
