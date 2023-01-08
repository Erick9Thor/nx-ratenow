import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiBreadcrumbsComponent } from './ui-breadcrumbs/ui-breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UiBreadcrumbComponent } from './ui-breadcrumb/ui-breadcrumb.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [UiBreadcrumbsComponent, UiBreadcrumbComponent],
  exports: [UiBreadcrumbsComponent]
})
export class SharedFeatureBreadcrumbsModule {}
