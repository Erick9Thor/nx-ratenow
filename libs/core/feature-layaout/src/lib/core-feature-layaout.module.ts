import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayaoutComponent } from './ui-layaout/ui-layaout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreFeatureProgressBarLoaderModule } from '@nx-ratenow/core/feature-progress-bar-loader';
import { BenchmarkDashboardFeatureModule } from '@nx-ratenow/benchmark/dashboard/feature';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    CoreFeatureProgressBarLoaderModule,

    // TODO:  delete, test proposes
    BenchmarkDashboardFeatureModule
  ],
  declarations: [UiLayaoutComponent],
  exports: [UiLayaoutComponent]
})
export class CoreFeatureLayaoutModule {}
