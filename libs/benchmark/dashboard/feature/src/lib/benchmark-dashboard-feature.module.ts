import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainComponent } from './view-main/view-main.component';
import { CoreFeaturePageLayoutModule } from '@nx-ratenow/core/feature-page-layout';
import { SharedFeatureBreadcrumbsModule } from '@nx-ratenow/shared/feature-breadcrumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    CoreFeaturePageLayoutModule,
    SharedFeatureBreadcrumbsModule,

    // TODO: This is a modal for add should stay on modals
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  declarations: [ViewMainComponent],
  exports: [ViewMainComponent]
})
export class BenchmarkDashboardFeatureModule {}
