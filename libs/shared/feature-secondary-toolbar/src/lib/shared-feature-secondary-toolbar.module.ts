import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSecondaryToolbarComponent } from './ui-secondary-toolbar/ui-secondary-toolbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedFeatureBreadcrumbsModule } from '@nx-ratenow/shared/feature-breadcrumbs';

@NgModule({
  imports: [
    CommonModule,

    RouterModule,
    MatButtonModule,
    MatIconModule,
    SharedFeatureBreadcrumbsModule
  ],
  declarations: [UiSecondaryToolbarComponent],
  exports: [UiSecondaryToolbarComponent]
})
export class SharedFeatureSecondaryToolbarModule {}
