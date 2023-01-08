import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiQuickpanelComponent } from './ui-quickpanel/ui-quickpanel.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [UiQuickpanelComponent],
  exports: [UiQuickpanelComponent]
})
export class CoreFeatureQuickpanelModule {}
