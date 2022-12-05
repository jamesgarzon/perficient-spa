import { ValueProvider } from '@angular/core';
import { provideCmsStructure } from '@spartacus/storefront';

export const PrfCmsContentProviders: ValueProvider[] = [
  provideCmsStructure({
    componentId: 'PrfBannerComponent',
    pageSlotPosition: 'PrfBannerSlot',
  }),
];
