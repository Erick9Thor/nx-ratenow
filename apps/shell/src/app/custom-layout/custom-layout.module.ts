import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { CoreConfigPanelModule } from '@nx-ratenow/core/config-panel';
import { SharedFeatureSidebarModule } from '@nx-ratenow/shared/feature-sidebar';
import { CoreLayoutFeatureFooterModule } from '@nx-ratenow/core/layout/feature-footer';
import { CoreLayoutFeatureToolbarModule } from '@nx-ratenow/core/layout/feature-toolbar';
import { CoreLayoutFeatureNavigationModule } from '@nx-ratenow/core/layout/feature-navigation';
import { CoreLayoutFeatureQuickpanelModule } from '@nx-ratenow/core/layout/feature-quickpanel';
import { CoreLayoutFeatureLayoutModule } from '@nx-ratenow/core/layout/feature-layout';
import { CoreLayoutFeatureSidenavModule } from '@nx-ratenow/core/layout/feature-sidenav';
@NgModule({
  imports: [
    CommonModule,

    CoreLayoutFeatureToolbarModule,
    CoreLayoutFeatureFooterModule,
    CoreLayoutFeatureNavigationModule,
    CoreLayoutFeatureQuickpanelModule,
    CoreLayoutFeatureLayoutModule,
    CoreLayoutFeatureSidenavModule,

    CoreConfigPanelModule,
    SharedFeatureSidebarModule
  ],
  declarations: [CustomLayoutComponent]
})
export class CustomLayoutModule {}
