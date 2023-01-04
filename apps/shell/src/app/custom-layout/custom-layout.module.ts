import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { CoreConfigPanelModule } from '@nx-ratenow/core/config-panel';
import { SharedFeatureSidebarModule } from '@nx-ratenow/shared/feature-sidebar';
import { CoreFeatureFooterModule } from '@nx-ratenow/core/feature-footer';

@NgModule({
  imports: [
    CommonModule,
    CoreFeatureFooterModule,
    CoreConfigPanelModule,
    SharedFeatureSidebarModule
  ],
  declarations: [CustomLayoutComponent]
})
export class CustomLayoutModule {}
