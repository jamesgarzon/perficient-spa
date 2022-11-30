import { OccConfig } from '@spartacus/core';

export const prfEndpointProductConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        productSearch:
          'products/search?fields=products(code,name,manufacturer,categories(name),summary,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
        product: {
          list: 'products/${productCode}?fields=code,name,manufacturer,categories(name),summary,price(formattedValue),images(DEFAULT,galleryIndex),baseProduct',
        },
      },
    },
  },
};
