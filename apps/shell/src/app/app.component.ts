import { BreakpointObserver } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  MatIconRegistry,
  SafeResourceUrlWithIconOptions
} from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ConfigService } from '@nx-ratenow/core/config';
import {
  LayoutService,
  NavigationService,
  SplashScreenService
} from '@nx-ratenow/core/data-access-layaout';
import { checkRouterChildsData } from '@nx-ratenow/core/utils';
import { UiSidebarComponent } from '@nx-ratenow/shared/feature-sidebar';
import { Settings } from 'luxon';
import { filter, map, startWith } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'nx-ratenow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;

  isFooterVisible$ = this.configService.config$.pipe(
    map((config) => config.footer.visible)
  );

  isDesktop$ = this.layoutService.isDesktop$;

  toolbarShadowEnabled$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() =>
      checkRouterChildsData(
        this.router.routerState.root.snapshot,
        (data) => data.toolbarShadowEnabled
      )
    )
  );

  @ViewChild('configpanel', { static: true }) configpanel: UiSidebarComponent;

  constructor(
    private configService: ConfigService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    // TODO: Move this into project.json or a service
    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );
          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );
          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
        }
      }
    );

    /**
     * TODO: Create a sidebar file with this object
     */
    this.navigationService.items = [
      {
        type: 'subheading',
        label: 'Dashboards',
        children: [
          {
            type: 'link',
            label: 'Benchmark',
            route: '/benchmark',
            icon: 'mat:insights',
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'Clients',
            route: '/clients',
            icon: 'mat:person_outline',
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'System Status',
            route: '/system',
            icon: 'mat:desktop_windows',
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'IT management',
            route: '/it',
            icon: 'mat:manage_accounts',
            routerLinkActiveOptions: { exact: true }
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Apps',
        children: [
          {
            type: 'link',
            label: 'Calendar',
            route: '/apps/calendar',
            icon: 'mat:date_range',
            badge: {
              value: '12',
              bgClass: 'bg-deep-purple',
              textClass: 'text-deep-purple-contrast'
            }
          },
          {
            type: 'link',
            label: 'Mailbox',
            route: '/apps/mail',
            icon: 'mat:mail'
          },
          {
            type: 'link',
            label: 'Contacts',
            route: '/apps/contacts',
            icon: 'mat:contacts'
          },
          {
            type: 'link',
            label: 'Scrumboard',
            route: '/apps/scrumboard',
            icon: 'mat:assessment'
            // badge: {
            //   value: 'NEW',
            //   bgClass: 'bg-primary',
            //   textClass: 'text-primary-contrast'
            // }
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Clients',
        children: []
      },
      {
        type: 'subheading',
        label: 'System status',
        children: [
          {
            type: 'link',
            label: 'Data Volume',
            icon: 'mat:analytics',
            route: 'system/users'
          },
          {
            type: 'link',
            label: 'Volume of Users',
            icon: 'mat:group',
            route: 'system/users'
          },
          {
            type: 'link',
            label: 'Translation management',
            icon: 'mat:translate',
            route: 'system/translations'
          },
          {
            type: 'link',
            label: 'Terminal status',
            icon: 'mat:terminal',
            route: 'system/terminals'
          }
        ]
      },
      {
        type: 'subheading',
        label: 'IT Management',
        children: [
          {
            type: 'link',
            label: 'Maintenance AdminWeb',
            icon: 'mat:settings_applications',
            route: 'it/users'
          },
          {
            type: 'link',
            label: 'RTN Analytics Maintenance',
            icon: 'mat:build',
            route: 'it/users'
          },
          {
            type: 'link',
            label: 'Actions register',
            icon: 'mat:manage_history',
            route: 'it/users'
          },
          {
            type: 'link',
            label: 'Recalculation',
            icon: 'mat:calculate',
            route: 'it/users'
          },
          {
            type: 'link',
            label: 'Translation Management',
            icon: 'mat:translate',
            route: 'it/users'
          }
        ]
      },
      {
        type: 'subheading',
        label: 'Customize',
        children: []
      },
      {
        type: 'link',
        label: 'Configuration',
        route: () => this.layoutService.openConfigpanel(),
        icon: 'mat:settings'
      }
    ];
  }

  ngOnInit(): void {
    this.layoutService.configpanelOpen$
      .pipe(untilDestroyed(this))
      .subscribe((open) =>
        open ? this.configpanel.open() : this.configpanel.close()
      );
  }
}
