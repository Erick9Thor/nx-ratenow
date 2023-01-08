import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from '@nx-ratenow/core/material';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ToolbarComponent } from './ui-toolbar/toolbar.component';
import { ToolbarUserDropdownComponent } from './toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { ToolbarNotificationsDropdownComponent } from './toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';

import { RouterModule } from '@angular/router';
import { CorePipesModule } from '@nx-ratenow/core/pipes';
import { CoreFeatureNavigationModule } from '@nx-ratenow/core/feature-navigation';

@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule,
    RouterModule,
    CorePipesModule,
    CoreFeatureNavigationModule
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
export class CoreFeatureToolbarModule {}
