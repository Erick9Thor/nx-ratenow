import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { CoreConfigPanelModule } from '@nx-ratenow/core/config-panel';
import { SharedFeatureSidebarModule } from '@nx-ratenow/shared/feature-sidebar';
import { CoreFeatureFooterModule } from '@nx-ratenow/core/layout/feature-footer';
import { CoreFeatureToolbarModule } from '@nx-ratenow/core/layout/feature-toolbar';
import { CoreFeatureNavigationModule } from '@nx-ratenow/core/layout/feature-navigation';
import { CoreFeatureQuickpanelModule } from '@nx-ratenow/core/layout/feature-quickpanel';
import { CoreFeatureLayaoutModule } from '@nx-ratenow/core/layout/feature-layaout';
import { CoreFeatureSidenavModule } from '@nx-ratenow/core/layout/feature-sidenav';
@NgModule({
  imports: [
    CommonModule,

    CoreFeatureToolbarModule,
    CoreFeatureFooterModule,
    CoreFeatureNavigationModule,
    CoreFeatureQuickpanelModule,
    CoreFeatureLayaoutModule,
    CoreFeatureSidenavModule,

    CoreConfigPanelModule,
    SharedFeatureSidebarModule
  ],
  declarations: [CustomLayoutComponent]
})
export class CustomLayoutModule {}
