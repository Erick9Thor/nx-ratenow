import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavigationItemComponent } from './ui-navigation-item/ui-navigation-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,

    MatIconModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [UiNavigationItemComponent],
  exports: [UiNavigationItemComponent]
})
export class CoreNavigationItemModule {}
