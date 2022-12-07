import { Component } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-prf-product-summary',
  templateUrl: './prf-product-summary.component.html',
  styleUrls: ['./prf-product-summary.component.scss'],
})
export class PrfProductSummaryComponent {
  product$ = this.currentProductService.getProduct();
  constructor(private currentProductService: CurrentProductService) {}
}
