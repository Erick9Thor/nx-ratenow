import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreLayoutFeatureToolbarModule } from '@nx-ratenow/core/layout/feature-toolbar';
import { CoreLayoutFeatureFooterModule } from '@nx-ratenow/core/layout/feature-footer';
import { CoreLayoutFeatureNavigationModule } from '@nx-ratenow/core/layout/feature-navigation';
import { CoreLayoutFeatureQuickpanelModule } from '@nx-ratenow/core/layout/feature-quickpanel';
import { CoreLayoutFeatureLayoutModule } from '@nx-ratenow/core/layout/feature-layout';
import { CoreLayoutFeatureSidenavModule } from '@nx-ratenow/core/layout/feature-sidenav';
import { CoreConfigPanelModule } from '@nx-ratenow/core/config-panel';
import { SharedFeatureSidebarModule } from '@nx-ratenow/shared/feature-sidebar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // LAYOUT
    CoreLayoutFeatureToolbarModule,
    CoreLayoutFeatureFooterModule,
    CoreLayoutFeatureNavigationModule,
    CoreLayoutFeatureQuickpanelModule,
    CoreLayoutFeatureLayoutModule,
    CoreLayoutFeatureSidenavModule,

    CoreConfigPanelModule,
    SharedFeatureSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
