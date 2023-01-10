import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export class TranslateFSLoader implements TranslateLoader {
  constructor(private prefix = './assets/i18n') {}

  /**
   * Gets the translations from the server, store them in the transfer state
   */
  public getTranslation(lang: string): Observable<any> {
    const pathGlobal = join(
      __dirname,
      '../browser',
      this.prefix,
      'global',
      `${lang}.global.json`
    );

    const pathDashboard = join(
      __dirname,
      '../browser',
      this.prefix,
      'dashboard',
      `${lang}.dashboard.json`
    );

    const dataDashboard = JSON.parse(readFileSync(pathDashboard, 'utf8'));
    const dataGlobal = JSON.parse(readFileSync(pathGlobal, 'utf8'));

    return of({
      ...dataGlobal,
      ...dataDashboard
    });
  }
}

export function translateLoaderFactory(httpClient: HttpClient, platform: any) {
  return isPlatformBrowser(platform)
    ? multiTranslateLoader(httpClient)
    : new TranslateFSLoader();
}

// MULTI TRANSLATE

export function multiTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: './assets/i18n/global/',
      suffix: `.global.json?cacheBuster=dev`
    },
    {
      prefix: './assets/i18n/landing/',
      suffix: `.landing.json?cacheBuster=dev`
    },
    {
      prefix: './assets/i18n/checkout/',
      suffix: `.checkout.json?cacheBuster=dev`
    },
    {
      prefix: './assets/i18n/dashboard/',
      suffix: `.dashboard.json?cacheBuster=dev`
    },
    {
      prefix: './assets/i18n/checkout/home/',
      suffix: `.renters.json?cacheBuster=dev`
    },
    {
      prefix: './assets/i18n/dashboard/home/',
      suffix: `.renters.json?cacheBuster=dev`
    }
  ]);
}

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public resources: { prefix: string; suffix: string }[] = [
      {
        prefix: '/assets/i18n/',
        suffix: `.json?cacheBuster=dev`
      }
    ]
  ) {}
  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {
    return forkJoin(
      this.resources.map((config) =>
        this.http.get(`${config.prefix}${lang}${config.suffix}`)
      )
    ).pipe(
      map((response) =>
        response.reduce((a: any, b: any) => {
          const obj: any = Object.assign(a, b);
          return obj;
        })
      )
    );
  }
}
