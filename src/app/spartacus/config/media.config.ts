import { ImageLoadingStrategy, MediaConfig } from '@spartacus/storefront';

/**
 * Ensure window exists (avoid error with ssr)
 */
const pixelDensity = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
export const prfMediaConfig: MediaConfig = {
  imageLoadingStrategy: ImageLoadingStrategy.LAZY,
  mediaFormats: {
    mobile: { width: 768 * pixelDensity },
    tablet: { width: 992 * pixelDensity },
    desktop: { width: 1200 * pixelDensity },
    widescreen: { width: 1400 * pixelDensity },
    // product media
    cartIcon: { width: 65 },
    thumbnail: { width: 96 },
    product: { width: 284 },
    zoom: { width: 515 },
  },
};
