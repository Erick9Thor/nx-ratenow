import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { dropdownAnimation } from '@nx-ratenow/core/animations';
import { filter } from 'rxjs/operators';
import {
  NavigationDropdown,
  NavigationItem,
  NavigationLink,
  NavigationService
} from '@nx-ratenow/core/data-access-layaout';

@UntilDestroy()
@Component({
  selector: 'nx-ratenow-ui-sidenav-item',
  templateUrl: './ui-sidenav-item.component.html',
  styleUrls: ['./ui-sidenav-item.component.scss'],
  animations: [dropdownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSidenavItemComponent implements OnInit, OnChanges {
  @Input() item!: NavigationItem;
  @Input() level!: number;
  isOpen!: boolean;
  isActive!: boolean;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private navigationService: NavigationService
  ) {}

  @HostBinding('class')
  get levelClass() {
    return `item-level-${this.level}`;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        filter(() => this.isDropdown(this.item)),
        untilDestroyed(this)
      )
      .subscribe(() => this.onRouteChange());

    this.navigationService.openChange$
      .pipe(
        filter(() => this.isDropdown(this.item)),
        untilDestroyed(this)
      )
      .subscribe((item) => this.onOpenChange(item));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      // eslint-disable-next-line no-prototype-builtins
      changes.hasOwnProperty('item') &&
      this.isDropdown(this.item)
    ) {
      this.onRouteChange();
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
    this.cd.markForCheck();
  }

  onOpenChange(item: NavigationDropdown) {
    if (this.isChildrenOf({ parent: this.item as NavigationDropdown, item })) {
      return;
    }

    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      return;
    }

    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }

  onRouteChange() {
    if (this.hasActiveChilds(this.item as NavigationDropdown)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item as NavigationDropdown);
      this.cd.markForCheck();
    }
  }

  isChildrenOf({
    parent,
    item
  }: {
    parent: NavigationDropdown;
    item: NavigationDropdown;
  }): any {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    return parent.children
      .filter((child) => this.isDropdown(child))
      .some((child) =>
        this.isChildrenOf({ parent: child as NavigationDropdown, item })
      );
  }

  // TODO: Fix all this any
  hasActiveChilds(parent: NavigationDropdown): boolean {
    return parent.children.some((child: any) => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }

      if (this.isLink(child) && !this.isFunction((child as any).route as any)) {
        return this.router.isActive((child as any).route as string, false);
      }

      return false;
    });
  }

  isFunction(prop: NavigationLink['route']) {
    return prop instanceof Function;
  }
}
