import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  ColorSchemeName,
  ColorVariable,
  colorVariables,
  ConfigService,
  RateNowConfig,
  RateNowConfigName
} from '@nx-ratenow/core/config';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-ratenow-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent {
  configs: RateNowConfig[] = this.configService.configs;
  colorVariables: Record<string, ColorVariable> = colorVariables;

  config$: Observable<RateNowConfig | undefined> = this.configService.config$;

  isRTL$: Observable<boolean> = this.config$.pipe(
    map((config) => config?.direction === 'rtl')
  );

  isDark$: Observable<boolean> = this.config$.pipe(
    map((config) => config?.style.colorScheme === ColorSchemeName.dark)
  );

  ConfigName = RateNowConfigName;
  ColorSchemeName = ColorSchemeName;
  selectedColor = colorVariables['blue'];

  constructor(
    private configService: ConfigService,
    private layoutService: LayoutService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setConfig(layout: RateNowConfigName, colorScheme: ColorSchemeName): void {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }

  selectColor(color: ColorVariable): void {
    this.selectedColor = color;
    this.configService.updateConfig({
      style: {
        colors: {
          primary: {
            default: color.default,
            contrast: color.contrast
          }
        }
      }
    });
  }

  isSelectedColor(color: ColorVariable): boolean {
    return color === this.selectedColor;
  }

  enableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.dark
      }
    });
  }

  disableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.default
      }
    });
  }

  layoutRTLChange(change: MatSlideToggleChange): void {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }
}
