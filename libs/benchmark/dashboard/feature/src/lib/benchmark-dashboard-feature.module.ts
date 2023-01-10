import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainComponent } from './view-main/view-main.component';
import { CoreFeaturePageLayoutModule } from '@nx-ratenow/core/feature-page-layout';
import { SharedFeatureBreadcrumbsModule } from '@nx-ratenow/shared/feature-breadcrumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedFeatureTableModule } from '@nx-ratenow/shared/feature-table';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreFeaturePageLayoutModule,
    SharedFeatureBreadcrumbsModule,

    SharedFeatureTableModule,

    // TODO: This is a modal for add should stay on modals
    FormsModule,
    // MatTooltipModule,
    ReactiveFormsModule,
    // MatSelectModule,
    MatButtonToggleModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ViewMainComponent }
    ])
  ],
  declarations: [ViewMainComponent],
  exports: [ViewMainComponent]
})
export class BenchmarkDashboardFeatureModule {}
