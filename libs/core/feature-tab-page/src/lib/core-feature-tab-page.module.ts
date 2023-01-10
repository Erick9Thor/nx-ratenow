import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageTabComponent } from './ui-page-tab/ui-page-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ],
  declarations: [UiPageTabComponent],
  exports: [UiPageTabComponent]
})
export class CoreFeatureTabPageModule {}
