import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { SmartEditRootModule, SMART_EDIT_FEATURE, SmartEditConfig } from '@spartacus/smartedit/root';

@NgModule({
  declarations: [],
  imports: [SmartEditRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [SMART_EDIT_FEATURE]: {
          module: () => import('@spartacus/smartedit').then((m) => m.SmartEditModule),
        },
      },
    }),
    provideConfig(<SmartEditConfig>{
      smartEdit: {
        storefrontPreviewRoute: 'cx-preview',
        allowOrigin: 'taloscommerce:9002, localhost:9002, local.taloscommerce.com:9002',
      },
    }),
  ],
})
export class SmartEditFeatureModule {}
