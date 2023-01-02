import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nx-ratenow-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  sidenavOpen = false;
  svgIcon = 'https://ratenow.es/img/logo-ratenow-b-full.svg';

  @Output()
  public closeSidenav: EventEmitter<void> = new EventEmitter<void>();

  toggleSidenav() {
    this.closeSidenav.emit();
  }
}
