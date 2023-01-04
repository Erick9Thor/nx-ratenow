import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '@nx-ratenow/core/data-access-layaout';
import { ConfigService } from '@nx-ratenow/core/config';
import { PopoverService } from '@nx-ratenow/shared/feature-popover';
import { NavigationLink } from '../interfaces/navigation-item.interface';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'nx-ratenow-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() collapsed!: boolean;

  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(
    map((config) => config?.sidenav.title)
  );
  imageUrl$ = this.configService.config$.pipe(
    map((config) => config?.sidenav.imageUrl)
  );
  showCollapsePin$ = this.configService.config$.pipe(
    map((config) => config?.sidenav.showCollapsePin)
  );
  userVisible$ = this.configService.config$.pipe(
    map((config) => config?.sidenav.user.visible)
  );
  searchVisible$ = this.configService.config$.pipe(
    map((config) => config?.sidenav.search.visible)
  );

  userMenuOpen$: Observable<boolean> = of(false);

  items = this.navigationService.items;

  constructor(
    private navigationService: NavigationService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private readonly popoverService: PopoverService,
    private readonly dialog: MatDialog
  ) {}

  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }

  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed
      ? this.layoutService.expandSidenav()
      : this.layoutService.collapseSidenav();
  }

  trackByRoute(index: number, item: NavigationLink): string {
    return item.route;
  }

  openProfileMenu(origin: HTMLDivElement): void {
    // this.userMenuOpen$ = of(
    //   this.popoverService.open({
    //     content: UserMenuComponent,
    //     origin,
    //     offsetY: -8,
    //     width: origin.clientWidth,
    //     position: [
    //       {
    //         originX: 'center',
    //         originY: 'top',
    //         overlayX: 'center',
    //         overlayY: 'bottom'
    //       }
    //     ]
    //   })
    // ).pipe(
    //   switchMap((popoverRef) => popoverRef.afterClosed$.pipe(map(() => false))),
    //   startWith(true)
    // );
  }

  openSearch(): void {
    // this.dialog.open(SearchModalComponent, {
    //   panelClass: 'ratenow-dialog-glossy',
    //   width: '100%',
    //   maxWidth: '600px'
    // });
  }
}
