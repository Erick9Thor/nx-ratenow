import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  NavigationItem,
  NavigationLink,
  NavigationService
} from '@nx-ratenow/core/data-access-layaout';
import { trackByRoute } from '@nx-ratenow/core/utils';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'nx-ratenow-ui-navigation-item',
  templateUrl: './ui-navigation-item.component.html',
  styleUrls: ['./ui-navigation-item.component.scss']
})
export class UiNavigationItemComponent {
  @Input() item: NavigationItem;

  isActive$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith(null),
    map(() => (item: NavigationItem) => this.hasActiveChilds(item))
  );

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;
  trackByRoute = trackByRoute;

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  hasActiveChilds(parent: NavigationItem): boolean {
    if (this.isLink(parent)) {
      return this.router.isActive(parent.route as string, true);
    }

    if (this.isDropdown(parent) || this.isSubheading(parent)) {
      return parent.children.some((child) => {
        if (this.isDropdown(child)) {
          return this.hasActiveChilds(child);
        }

        if (this.isLink(child) && !this.isFunction(child.route)) {
          return this.router.isActive(child.route as string, true);
        }

        return false;
      });
    }

    return false;
  }

  isFunction(prop: NavigationLink['route']) {
    return prop instanceof Function;
  }
}
