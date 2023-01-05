import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayaoutComponent } from './ui-layaout/ui-layaout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [CommonModule, RouterModule, MatSidenavModule],
  declarations: [UiLayaoutComponent],
  exports: [UiLayaoutComponent]
})
export class CoreFeatureLayaoutModule {}
