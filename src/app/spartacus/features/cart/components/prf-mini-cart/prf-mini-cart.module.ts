import { NgModule } from '@angular/core';
import { PrfMiniCartComponent } from './prf-mini-cart.component';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [PrfMiniCartComponent],
  exports: [PrfMiniCartComponent],
  imports: [CommonModule],
  providers: [
    provideConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: PrfMiniCartComponent,
        },
      },
    }),
  ],
})
export class PrfMiniCartModule {}
