import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMaterialModule } from '@nx-ratenow/core/material';
import { CoreFeatureToolbarModule } from '@nx-ratenow/core/feature-toolbar';
import { CoreFeatureBreadcrumbModule } from "@nx-ratenow/core/feature-breadcrumb";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreFeatureToolbarModule,
    CoreFeatureBreadcrumbModule,
    CoreMaterialModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
