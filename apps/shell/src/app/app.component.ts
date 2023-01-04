import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { ConfigService } from '@nx-ratenow/core/config';

@Component({
  selector: 'nx-ratenow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(
  //   private configService: ConfigService,
  //   private renderer: Renderer2,
  //   private platform: Platform,
  //   @Inject(DOCUMENT) private document: Document,
  //   @Inject(LOCALE_ID) private localeId: string,
  //   private layoutService: LayoutService,
  //   private route: ActivatedRoute,
  //   private navigationService: NavigationService,
  //   private splashScreenService: SplashScreenService,
  //   private readonly matIconRegistry: MatIconRegistry,
  //   private readonly domSanitizer: DomSanitizer
  // ) {
  //   Settings.defaultLocale = this.localeId;
  //   if (this.platform.BLINK) {
  //     this.renderer.addClass(this.document.body, 'is-blink');
  //   }
  //   this.matIconRegistry.addSvgIconResolver(
  //     (
  //       name: string,
  //       namespace: string
  //     ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
  //       switch (namespace) {
  //         case 'mat':
  //           return this.domSanitizer.bypassSecurityTrustResourceUrl(
  //             `assets/img/icons/material-design-icons/two-tone/${name}.svg`
  //           );
  //         case 'logo':
  //           return this.domSanitizer.bypassSecurityTrustResourceUrl(
  //             `assets/img/icons/logos/${name}.svg`
  //           );
  //         case 'flag':
  //           return this.domSanitizer.bypassSecurityTrustResourceUrl(
  //             `assets/img/icons/flags/${name}.svg`
  //           );
  //       }
  //     }
  //   );
  //   /**
  //    * Customize the template to your needs with the ConfigService
  //    * Example:
  //    *  this.configService.updateConfig({
  //    *    sidenav: {
  //    *      title: 'Custom App',
  //    *      imageUrl: '//placehold.it/100x100',
  //    *      showCollapsePin: false
  //    *    },
  //    *    footer: {
  //    *      visible: false
  //    *    }
  //    *  });
  //    */
  //   /**
  //    * Config Related Subscriptions
  //    * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
  //    * Example: example.com/?layout=apollo&style=default
  //    */
  //   this.route.queryParamMap.subscribe((queryParamMap) => {
  //     if (queryParamMap.has('layout')) {
  //       this.configService.setConfig(
  //         queryParamMap.get('layout') as VexConfigName
  //       );
  //     }
  //     if (queryParamMap.has('style')) {
  //       this.configService.updateConfig({
  //         style: {
  //           colorScheme: queryParamMap.get('style') as ColorSchemeName
  //         }
  //       });
  //     }
  //     if (queryParamMap.has('primaryColor')) {
  //       const color: ColorVariable =
  //         colorVariables[queryParamMap.get('primaryColor')];
  //       if (color) {
  //         this.configService.updateConfig({
  //           style: {
  //             colors: {
  //               primary: color
  //             }
  //           }
  //         });
  //       }
  //     }
  //     if (queryParamMap.has('rtl')) {
  //       this.configService.updateConfig({
  //         direction: coerceBooleanProperty(queryParamMap.get('rtl'))
  //           ? 'rtl'
  //           : 'ltr'
  //       });
  //     }
  //   });
  //   /**
  //    * Add your own routes here
  //    */
  //   this.navigationService.items = [
  //     {
  //       type: 'subheading',
  //       label: 'Dashboards',
  //       children: [
  //         {
  //           type: 'link',
  //           label: 'Analytics',
  //           route: '/',
  //           icon: 'mat:insights',
  //           routerLinkActiveOptions: { exact: true }
  //         }
  //       ]
  //     }
  //   ];
  // }
}
