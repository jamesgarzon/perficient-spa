import { Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-prf-news',
  templateUrl: './prf-news.component.html',
  styleUrls: ['./prf-news.component.scss'],
})
export class PrfNewsComponent {
  data$ = this.componentData.data$;

  constructor(protected componentData: CmsComponentData<any>) {}
}
