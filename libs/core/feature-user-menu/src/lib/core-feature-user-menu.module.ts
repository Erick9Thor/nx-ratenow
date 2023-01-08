import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUserMenuComponent } from './ui-user-menu/ui-user-menu.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatRippleModule, RouterModule, MatIconModule],
  declarations: [UiUserMenuComponent]
})
export class CoreFeatureUserMenuModule {}
