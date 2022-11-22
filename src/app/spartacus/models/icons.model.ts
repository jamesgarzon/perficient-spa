import { ICON_TYPE } from '@spartacus/storefront';

enum CUSTOM_ICON_TYPE {
  LAB = 'LAB',
}

/**
 * We use this to extend enums, no supported natively by typescript
 */
export const PRF_ICON_TYPE = { ...ICON_TYPE, ...CUSTOM_ICON_TYPE };
export type PRF_ICON_TYPE = typeof PRF_ICON_TYPE;
