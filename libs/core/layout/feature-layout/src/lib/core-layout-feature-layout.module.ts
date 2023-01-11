import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayaoutComponent } from './ui-layaout/ui-layaout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreFeatureProgressBarLoaderModule } from '@nx-ratenow/core/feature-progress-bar-loader';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    CoreFeatureProgressBarLoaderModule
  ],
  declarations: [UiLayaoutComponent],
  exports: [UiLayaoutComponent]
})
export class CoreLayoutFeatureLayoutModule {}
