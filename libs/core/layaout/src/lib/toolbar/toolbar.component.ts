import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { ConfigService } from '@nx-ratenow/core/config';
import { NavigationService } from '../services/navigation.service';
import { PopoverService } from '@nx-ratenow/shared/feature-popover';

@Component({
  selector: 'nx-ratenow-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() mobileQuery!: boolean;

  @Input()
  @HostBinding('class.shadow-b')
  hasShadow!: boolean;

  navigationItems = this.navigationService.items;

  isHorizontalLayout$: Observable<boolean> = this.configService.config$.pipe(
    map((config: any) => config.layout === 'horizontal')
  );
  isVerticalLayout$: Observable<boolean> = this.configService.config$.pipe(
    map((config: any) => config.layout === 'vertical')
  );
  isNavbarInToolbar$: Observable<boolean> = this.configService.config$.pipe(
    map((config: any) => config.navbar.position === 'in-toolbar')
  );
  isNavbarBelowToolbar$: Observable<boolean> = this.configService.config$.pipe(
    map((config: any) => config.navbar.position === 'below-toolbar')
  );
  userVisible$: Observable<boolean> = this.configService.config$.pipe(
    map((config: any) => config.toolbar.user.visible)
  );

  megaMenuOpen$: Observable<boolean> = of(false);

  constructor(
    private layoutService: LayoutService,
    private configService: ConfigService,
    private navigationService: NavigationService,
    private popoverService: PopoverService
  ) {}

  openQuickpanel(): void {
    this.layoutService.openQuickpanel();
  }

  openSidenav(): void {
    this.layoutService.openSidenav();
  }

  openMegaMenu(origin: ElementRef | HTMLElement): void {
    // this.megaMenuOpen$ = of(
    //   this.popoverService.open({
    //     content: MegaMenuComponent,
    //     origin,
    //     offsetY: 12,
    //     position: [
    //       {
    //         originX: 'start',
    //         originY: 'bottom',
    //         overlayX: 'start',
    //         overlayY: 'top'
    //       },
    //       {
    //         originX: 'end',
    //         originY: 'bottom',
    //         overlayX: 'end',
    //         overlayY: 'top'
    //       }
    //     ]
    //   })
    // ).pipe(
    //   switchMap((popoverRef) => popoverRef.afterClosed$.pipe(map(() => false))),
    //   startWith(true)
    // );
  }

  openSearch(): void {
    this.layoutService.openSearch();
  }
}
