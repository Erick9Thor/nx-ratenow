import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';
import { RateNowConfigName } from './interfaces/config-name.model';
import { CSSValue, RateNowConfig } from './interfaces/ratenow-config.interface';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { ColorSchemeName } from './interfaces/colorSchemeName';
import { configs } from './interfaces/configs';
import { DeepPartial, mergeDeep } from '@nx-ratenow/core/utils';

@Injectable({
  providedIn: 'root'
})
export abstract class ConfigService {
  defaultConfig: RateNowConfigName = RateNowConfigName.basic;
  configs: RateNowConfig[] = configs;

  private _configSubject = new BehaviorSubject(
    this.configs.find((c) => c.id === this.defaultConfig)
  );
  config$ = this._configSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private layoutService: LayoutService
  ) {
    this.config$.subscribe((config) =>
      this._updateConfig(config as RateNowConfig)
    );
  }

  select<R>(selector: (config: RateNowConfig) => R): Observable<R> {
    return this.config$.pipe(map(selector as any));
  }

  setConfig(config: RateNowConfigName) {
    const settings = this.configs.find((c) => c.id === config);
    this._configSubject.next(settings);
  }

  updateConfig(config: DeepPartial<RateNowConfig>) {
    this._configSubject.next(
      mergeDeep({ ...(this._configSubject.getValue() as any) }, config)
    );
  }

  private _updateConfig(config: RateNowConfig): void {
    this._setLayoutClass(config.id);
    this._setStyle(config.style);
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }

  private _setStyle(style: RateNowConfig['style']): void {
    /**
     * Color Scheme
     */
    Object.values(ColorSchemeName)
      .filter((s) => s !== style.colorScheme)
      .forEach((value) => {
        if (this.document.body.classList.contains(value)) {
          this.document.body.classList.remove(value);
        }
      });

    this.document.body.classList.add(style.colorScheme);

    /**
     * Border Radius
     */
    this.document.body.style.setProperty(
      '--border-radius',
      `${style.borderRadius.value}${style.borderRadius.unit}`
    );

    const buttonBorderRadius: CSSValue =
      style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty(
      '--button-border-radius',
      `${buttonBorderRadius.value}${buttonBorderRadius.unit}`
    );

    /**
     * Primary Color
     */
    this.document.body.style.setProperty(
      '--color-primary',
      style.colors.primary.default.replace('rgb(', '').replace(')', '')
    );
    this.document.body.style.setProperty(
      '--color-primary-contrast',
      style.colors.primary.contrast.replace('rgb(', '').replace(')', '')
    );
  }

  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  private _emitResize(): void {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }

  private _setDirection(direction: 'ltr' | 'rtl') {
    this.document.body.dir = direction;
  }

  private _setSidenavState(sidenavState: 'expanded' | 'collapsed'): void {
    sidenavState === 'expanded'
      ? this.layoutService.expandSidenav()
      : this.layoutService.collapseSidenav();
  }

  private _setLayoutClass(layout: RateNowConfigName): void {
    this.configs.forEach((c) => {
      if (this.document.body.classList.contains(c.id)) {
        this.document.body.classList.remove(c.id);
      }
    });

    this.document.body.classList.add(layout);
  }
}
