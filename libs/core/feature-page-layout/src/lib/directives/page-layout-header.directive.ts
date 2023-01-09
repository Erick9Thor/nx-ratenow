import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ratenowPageLayoutHeader],ratenow-page-layout-header',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'ratenow-page-layout-header'
  }
})
export class PageLayoutHeaderDirective {}
