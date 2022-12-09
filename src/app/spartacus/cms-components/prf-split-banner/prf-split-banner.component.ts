import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { PrfSplitViewBanner } from '../../models/custom-cms.model';

@Component({
  selector: 'app-prf-split-banner',
  templateUrl: './prf-split-banner.component.html',
  styleUrls: ['./prf-split-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrfSplitBannerComponent {
  componentData$ = this.cmsComponentData.data$;
  constructor(protected cmsComponentData: CmsComponentData<PrfSplitViewBanner>) {}
}
