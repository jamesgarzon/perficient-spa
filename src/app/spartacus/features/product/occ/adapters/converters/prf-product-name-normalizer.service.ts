import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { formatUrl } from '@prf-utils/url-utils';

@Injectable({
  providedIn: 'root',
})
export class PrfProductNameNormalizerService implements Converter<Occ.Product, Product> {
  constructor() {}

  convert(source: Occ.Product, target: Product): Product {
    if (source.name) {
      target.nameForUrl = formatUrl(source.name);
    }
    return target;
  }
}
