import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageLayoutComponent } from './ui-page-layout/ui-page-layout.component';
import { PageLayoutContentDirective } from './directives/page-layout-content.directive';
import { PageLayoutHeaderDirective } from './directives/page-layout-header.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiPageLayoutComponent,
    PageLayoutHeaderDirective,
    PageLayoutContentDirective
  ],
  exports: [
    UiPageLayoutComponent,
    PageLayoutHeaderDirective,
    PageLayoutContentDirective
  ]
})
export class CoreFeaturePageLayoutModule {}
