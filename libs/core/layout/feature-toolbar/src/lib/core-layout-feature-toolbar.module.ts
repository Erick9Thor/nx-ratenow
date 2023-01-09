import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ToolbarComponent } from './ui-toolbar/toolbar.component';
import { ToolbarUserDropdownComponent } from './toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { ToolbarNotificationsDropdownComponent } from './toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';

import { RouterModule } from '@angular/router';
import { CorePipesModule } from '@nx-ratenow/core/pipes';
import { CoreLayoutFeatureNavigationModule } from '@nx-ratenow/core/layout/feature-navigation';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule,

    RouterModule,
    RouterModule,
    CorePipesModule,
    CoreLayoutFeatureNavigationModule
  ],
  declarations: [
    ToolbarNotificationsDropdownComponent,
    ToolbarNotificationsComponent,

    ToolbarSearchComponent,

    ToolbarUserDropdownComponent,
    ToolbarUserComponent,

    ToolbarComponent
  ],
  exports: [
    ToolbarUserComponent,
    ToolbarSearchComponent,
    ToolbarNotificationsComponent,
    ToolbarComponent
  ]
})
export class CoreLayoutFeatureToolbarModule {}
