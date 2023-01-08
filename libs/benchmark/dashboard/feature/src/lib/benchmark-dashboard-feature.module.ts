import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainComponent } from './view-main/view-main.component';
import { CoreFeaturePageLayoutModule } from '@nx-ratenow/core/feature-page-layout';
import { SharedFeatureBreadcrumbsModule } from '@nx-ratenow/shared/feature-breadcrumbs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    CoreFeaturePageLayoutModule,
    SharedFeatureBreadcrumbsModule,
    MatPaginatorModule,

    // TODO: This is for the table should be a component
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,

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
