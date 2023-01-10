import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Inject,
  InjectionToken,
  NgModule,
  Optional,
  PLATFORM_ID
} from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { translateLoaderFactory } from './translate-loaders';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient, PLATFORM_ID]
      }
    })
  ],
  exports: [TranslateModule]
})
export class CoreI18nModule {
  constructor(
    translate: TranslateService,
    @Optional() @Inject(Request) private req: Request,
    @Inject(PLATFORM_ID) private platform: InjectionToken<object>
  ) {
    translate.addLangs(['es', 'en']);
  }
}
