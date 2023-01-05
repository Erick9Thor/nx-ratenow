import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSidenavComponent } from './ui-sidenav/ui-sidenav.component';
import { UiSidenavItemComponent } from './ui-sidenav-item/ui-sidenav-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { SharedFeatureScrollbarModule } from '@nx-ratenow/shared/feature-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureScrollbarModule,

    RouterModule,

    MatToolbarModule,

    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule
  ],
  declarations: [UiSidenavComponent, UiSidenavItemComponent],
  exports: [UiSidenavComponent, UiSidenavItemComponent]
})
export class CoreFeatureSidenavModule {}
