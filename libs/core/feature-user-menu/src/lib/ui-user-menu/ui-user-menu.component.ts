import { Component } from '@angular/core';
import { PopoverRef } from '@nx-ratenow/shared/feature-popover';

@Component({
  selector: 'nx-ratenow-ui-user-menu',
  templateUrl: './ui-user-menu.component.html',
  styleUrls: ['./ui-user-menu.component.scss']
})
export class UiUserMenuComponent {
  constructor(private readonly popoverRef: PopoverRef) {}

  close(): void {
    /** Wait for animation to complete and then close */
    setTimeout(() => this.popoverRef.close(), 250);
  }
}
