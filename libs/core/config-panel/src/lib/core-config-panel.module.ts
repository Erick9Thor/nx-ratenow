import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPanelComponent } from './config-panel/config-panel.component';
import { ConfigPanelToggleComponent } from './config-panel-toggle/config-panel-toggle.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { LetModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,

    LetModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatSliderModule
  ],
  declarations: [ConfigPanelComponent, ConfigPanelToggleComponent],
  exports: [ConfigPanelComponent, ConfigPanelToggleComponent]
})
export class CoreConfigPanelModule {}
