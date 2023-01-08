import { Component, Input } from '@angular/core';
import { trackByValue } from '@nx-ratenow/core/utils';

@Component({
  selector: 'nx-ratenow-ui-breadcrumbs',
  templateUrl: './ui-breadcrumbs.component.html',
  styleUrls: ['./ui-breadcrumbs.component.scss']
})
export class UiBreadcrumbsComponent {
  @Input() crumbs: string[] = [];

  trackByValue = trackByValue;
}
