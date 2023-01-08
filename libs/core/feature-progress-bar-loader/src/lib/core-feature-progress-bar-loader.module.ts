import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProgressBarLoaderComponent } from './ui-progress-bar-loader/ui-progress-bar-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  LoadingBarConfig,
  LoadingBarModule,
  LOADING_BAR_CONFIG
} from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  declarations: [UiProgressBarLoaderComponent],
  exports: [UiProgressBarLoaderComponent],
  providers: [
    {
      provide: LOADING_BAR_CONFIG,
      useValue: {
        latencyThreshold: 80
      } as LoadingBarConfig
    }
  ]
})
export class CoreFeatureProgressBarLoaderModule {}
