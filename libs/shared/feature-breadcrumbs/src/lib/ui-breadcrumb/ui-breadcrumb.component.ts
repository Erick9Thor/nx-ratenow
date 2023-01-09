import { Component } from '@angular/core';

// TODO: Change this into HostBinding
@Component({
  selector: 'nx-ratenow-ui-breadcrumb',
  templateUrl: './ui-breadcrumb.component.html',
  styleUrls: ['./ui-breadcrumb.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class:
      'nx-ratenow-ui-breadcrumb body-2 text-hint leading-none hover:text-primary no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
  }
})
export class UiBreadcrumbComponent {}
