import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ratenowPageLayoutContent],ratenow-page-layout-content',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'ratenow-page-layout-content'
  }
})
export class PageLayoutContentDirective {}
