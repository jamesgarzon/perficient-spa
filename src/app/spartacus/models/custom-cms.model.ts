import { CmsComponent, Image, ImageGroup } from '@spartacus/core';
import { MediaContainer } from '@spartacus/storefront/shared/components/media/media.model';

export interface PrfSplitViewBanner extends CmsComponent {
  title?: string;
  content?: string;
  urlLink?: string;
  media?: MediaContainer | Image | ImageGroup | ImageGroup[];
}
