import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductIntroComponent } from '@spartacus/storefront';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-prf-product-info',
  templateUrl: './prf-product-info.component.html',
  styleUrls: ['./prf-product-info.component.scss'],
})
export class PrfProductInfoComponent extends ProductIntroComponent implements OnInit {
  @HostBinding('class.ghost') hasGhostData = false;

  ngOnInit() {
    this.product$.pipe(
      tap((data) => {
        console.log(data);
        this.hasGhostData = false;
      })
    );
  }
}
