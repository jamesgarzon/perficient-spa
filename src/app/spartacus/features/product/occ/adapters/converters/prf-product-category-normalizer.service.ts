import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { formatUrl } from '@prf-utils/url-utils';

@Injectable({
  providedIn: 'root',
})
export class PrfProductCategoryNormalizerService implements Converter<Occ.Product, Product> {
  constructor() {}

  convert(source: Occ.Product, target: Product): Product {
    if (source?.categories?.length && source.categories[0].name) {
      target.firstCategory = formatUrl(source.categories[0].name);
    }
    return target;
  }
}
