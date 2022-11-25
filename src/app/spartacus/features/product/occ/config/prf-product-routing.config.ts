import { RoutingConfig } from '@spartacus/core';

export const prfRoutingConfig: RoutingConfig = {
  routing: {
    routes: {
      product: {
        paths: [
          'electronics/cameras/:firstCategory/:manufacturer/:productCode/:name',
          'electronics/cameras/:manufacturer/:productCode/:name',
          'electronics/cameras/:productCode/:name',
          'electronics/cameras/:productCode',
        ],
        paramsMapping: { name: 'nameForUrl' },
      },
    },
  },
};
