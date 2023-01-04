import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfigService } from '@nx-ratenow/core/config';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { checkRouterChildsData } from '@nx-ratenow/core/utils';
import { UiSidebarComponent } from '@nx-ratenow/shared/feature-sidebar';
import { filter, map, startWith } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'nx-ratenow-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {
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
    private layoutService: LayoutService,
    private configService: ConfigService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.layoutService.configpanelOpen$
      .pipe(untilDestroyed(this))
      .subscribe((open) =>
        open ? this.configpanel.open() : this.configpanel.close()
      );
  }
}
