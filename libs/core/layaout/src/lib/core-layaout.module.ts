import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QuickpanelComponent } from './quickpanel/quickpanel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoreMaterialModule } from '@nx-ratenow/core/material';
import { SharedFeatureScrollbarModule } from '@nx-ratenow/shared/feature-scrollbar';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { RouterModule } from '@angular/router';
import { ToolbarNotificationsDropdownComponent } from './toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';
import { ToolbarNotificationsComponent } from './toolbar/toolbar-notifications/toolbar-notifications.component';
import { ToolbarSearchComponent } from './toolbar/toolbar-search/toolbar-search.component';
import { ToolbarUserDropdownComponent } from './toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component';
import { CoreNavigationItemModule } from '@nx-ratenow/core/navigation-item';
import { ToolbarUserComponent } from './toolbar/toolbar-user/toolbar-user.component';
import { UiLayaoutComponent } from './ui-layaout/ui-layaout.component';
import { CorePipesModule } from '@nx-ratenow/core/pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreMaterialModule,
    SharedFeatureScrollbarModule,
    CoreNavigationItemModule,
    CorePipesModule
  ],
  declarations: [
    // SideNav
    SidenavComponent,
    SidenavItemComponent,

    //  Toolbar
    ToolbarNotificationsComponent,
    ToolbarNotificationsDropdownComponent,

    ToolbarSearchComponent,

    ToolbarUserDropdownComponent,
    ToolbarUserComponent,

    ToolbarComponent,

    // Footer
    FooterComponent,

    // Navigation
    NavigationComponent,

    // QuickPanel
    QuickpanelComponent,

    // CORE Layaout
    UiLayaoutComponent
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    FooterComponent,
    NavigationComponent,
    QuickpanelComponent,
    UiLayaoutComponent
  ]
})
export class CoreLayaoutModule {}
