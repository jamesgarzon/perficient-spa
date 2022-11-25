import { Component } from '@angular/core';
import { Product, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { filter, map, pluck, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss'],
})
export class StaticPageComponent {
  constructor(private routingService: RoutingService, private productSearchService: ProductSearchService) {}

  mapToRandomProduct(products: Product[] | undefined) {
    if (products?.length) {
      const randomIndex = Math.floor(Math.random() * products?.length);
      return products[randomIndex];
    }
    return null;
  }

  redirectToProduct(product: Product | null) {
    if (product) {
      this.routingService.go({
        cxRoute: 'product',
        params: { code: product.code, nameForUrl: product.nameForUrl },
      });
    }
  }

  hasProductsAttribute(searchResult: ProductSearchPage) {
    return searchResult.hasOwnProperty('products');
  }

  goToRandomProduct() {
    this.productSearchService.search('cam', { pageSize: 100 });
    this.productSearchService
      .getResults()
      .pipe(
        filter(this.hasProductsAttribute),
        pluck('products'),
        map(this.mapToRandomProduct),
        tap(this.redirectToProduct),
        take(1)
      )
      .subscribe();
  }
}
