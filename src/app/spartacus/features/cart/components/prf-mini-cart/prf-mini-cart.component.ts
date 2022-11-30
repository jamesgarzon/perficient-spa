import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-prf-mini-cart',
  templateUrl: './prf-mini-cart.component.html',
  styleUrls: ['./prf-mini-cart.component.scss'],
})
export class PrfMiniCartComponent extends MiniCartComponent {}
