import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';
import { CoreLayaoutModule } from '@nx-ratenow/core/layaout';
import { CoreConfigPanelModule } from '@nx-ratenow/core/config-panel';
import { SharedFeatureSidebarModule } from '@nx-ratenow/shared/feature-sidebar';

@NgModule({
  imports: [
    CommonModule,
    CoreLayaoutModule,
    CoreConfigPanelModule,
    SharedFeatureSidebarModule
  ],
  declarations: [CustomLayoutComponent]
})
export class CustomLayoutModule {}
