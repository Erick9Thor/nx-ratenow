import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavigationComponent } from './ui-navigation/ui-navigation.component';
import { UiNavigationItemComponent } from './ui-navigation-item/ui-navigation-item.component';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    MatMenuModule,
    MatIconModule,

    RouterModule
  ],
  declarations: [UiNavigationComponent, UiNavigationItemComponent],
  exports: [UiNavigationComponent, UiNavigationItemComponent]
})
export class CoreFeatureNavigationModule {}
