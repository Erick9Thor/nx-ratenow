import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router, Scroll } from '@angular/router';
import { filter, map, startWith, withLatestFrom } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { checkRouterChildsData } from '@nx-ratenow/core/utils';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { ConfigService } from '@nx-ratenow/core/config';

@UntilDestroy()
@Component({
  selector: 'nx-ratenow-ui-layaout',
  templateUrl: './ui-layaout.component.html',
  styleUrls: ['./ui-layaout.component.scss']
})
export class UiLayaoutComponent implements OnInit, AfterViewInit {
  @Input() sidenavRef!: TemplateRef<any>;
  @Input() toolbarRef!: TemplateRef<any>;
  @Input() footerRef!: TemplateRef<any>;
  @Input() quickpanelRef!: TemplateRef<any>;

  isLayoutVertical$ = this.configService.config$.pipe(
    map((config: any) => config.layout === 'vertical')
  );
  isBoxed$ = this.configService.config$.pipe(
    map((config: any) => config.boxed)
  );
  isToolbarFixed$ = this.configService.config$.pipe(
    map((config: any) => config.toolbar.fixed)
  );
  isFooterFixed$ = this.configService.config$.pipe(
    map((config: any) => config.footer.fixed)
  );
  isFooterVisible$ = this.configService.config$.pipe(
    map((config: any) => config.footer.visible)
  );
  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isDesktop$ = this.layoutService.isDesktop$;

  scrollDisabled$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() =>
      checkRouterChildsData(
        this.router.routerState.root.snapshot,
        (data) => data.scrollDisabled
      )
    )
  );

  containerEnabled$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() =>
      checkRouterChildsData(
        this.router.routerState.root.snapshot,
        (data: any) => data.containerEnabled
      )
    )
  );

  searchOpen$ = this.layoutService.searchOpen$;

  @ViewChild('quickpanel', { static: true }) quickpanel!: MatSidenav;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @ViewChild(MatSidenavContainer, { static: true })
  sidenavContainer!: MatSidenavContainer;

  constructor(
    private cd: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    /**
     * Expand Sidenav when we switch from mobile to desktop view
     */
    this.isDesktop$
      .pipe(
        filter((matches) => !matches),
        untilDestroyed(this)
      )
      .subscribe(() => this.layoutService.expandSidenav());

    /**
     * Open/Close Quickpanel through LayoutService
     */
    this.layoutService.quickpanelOpen$
      .pipe(untilDestroyed(this))
      .subscribe((open) =>
        open ? this.quickpanel.open() : this.quickpanel.close()
      );

    /**
     * Open/Close Sidenav through LayoutService
     */
    this.layoutService.sidenavOpen$
      .pipe(untilDestroyed(this))
      .subscribe((open) => (open ? this.sidenav.open() : this.sidenav.close()));

    /**
     * Mobile only:
     * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
     */
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        withLatestFrom(this.isDesktop$),
        filter(([event, matches]) => !matches),
        untilDestroyed(this)
      )
      .subscribe(() => this.sidenav.close());
  }

  ngAfterViewInit(): void {
    /**
     * Enable Scrolling to specific parts of the page using the Router
     */
    this.router.events
      .pipe(
        filter<Event, Scroll>((e: Event): e is Scroll => e instanceof Scroll),
        untilDestroyed(this)
      )
      .subscribe((e) => {
        if (e.position) {
          // backward navigation
          this.sidenavContainer.scrollable.scrollTo({
            start: e.position[0],
            top: e.position[1]
          });
        } else if (e.anchor) {
          // anchor navigation

          const scroll = (anchor: HTMLElement) =>
            this.sidenavContainer.scrollable.scrollTo({
              behavior: 'smooth',
              top: anchor.offsetTop,
              left: anchor.offsetLeft
            });

          let anchorElem = this.document.getElementById(e.anchor);

          if (anchorElem) {
            scroll(anchorElem);
          } else {
            setTimeout(() => {
              anchorElem = this.document.getElementById(e.anchor as string);
              scroll(anchorElem as HTMLElement);
            }, 100);
          }
        } else {
          // forward navigation
          this.sidenavContainer.scrollable.scrollTo({
            top: 0,
            start: 0
          });
        }
      });
  }
}
