import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiBreadcrumbComponent} from "./ui-breadcrumb/ui-breadcrumb.component";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {CoreMaterialModule} from "@nx-ratenow/core/material";

@NgModule({
  imports: [CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    CoreMaterialModule
  ],

  declarations: [
    UiBreadcrumbComponent
  ],
  exports: [
    UiBreadcrumbComponent
  ]
})
export class CoreFeatureBreadcrumbModule {}
