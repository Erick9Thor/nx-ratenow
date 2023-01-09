import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

// TODO: Add Hostbinding
@Component({
  selector: 'nx-ratenow-ui-sidebar',
  templateUrl: './ui-sidebar.component.html',
  styleUrls: ['./ui-sidebar.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'nx-ratenow-ui-sidebar'
  }
})
export class UiSidebarComponent {
  @Input() position: 'left' | 'right' = 'left';
  @Input() invisibleBackdrop!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  private _opened!: boolean;

  get opened() {
    return this._opened;
  }

  @Input() set opened(opened: boolean) {
    this._opened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }

  get positionLeft() {
    return this.position === 'left';
  }

  get positionRight() {
    return this.position === 'right';
  }

  enableScrollblock() {
    if (!this.document.body.classList.contains('ratenow-scrollblock')) {
      this.document.body.classList.add('ratenow-scrollblock');
    }
  }

  disableScrollblock() {
    if (this.document.body.classList.contains('ratenow-scrollblock')) {
      this.document.body.classList.remove('ratenow-scrollblock');
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}
