import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { provideConfig, RoutingConfig } from '@spartacus/core';

const STATIC_ROUTES: Routes = [
  // custom page
  {
    path: 'static-page',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'staticPage' },
  },
  // alias
  {
    path: 'alias/myfaq',
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
    data: { pageLabel: '/faq' },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(STATIC_ROUTES)],
  providers: [
    provideConfig({
      routing: {
        routes: {
          staticPage: {
            paths: ['static-page'],
            protected: false,
          },
        },
      },
    } as RoutingConfig),
  ],
})
export class CustomRoutingModule {}
