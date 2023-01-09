import { Component, Input } from '@angular/core';
import {
  fadeInRight400ms,
  fadeInUp400ms,
  scaleFadeIn400ms,
  scaleIn400ms,
  stagger40ms
} from '@nx-ratenow/core/animations';
import { Link } from '../interfaces/ui-page-tab.model';

@Component({
  selector: 'nx-ratenow-ui-page-tab',
  templateUrl: './ui-page-tab.component.html',
  styleUrls: ['./ui-page-tab.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class UiPageTabComponent {
  @Input() links: Link[] = [
    {
      label: 'Information',
      route: '../all'
    },
    {
      label: 'Contributors',
      route: '../frequent'
    }
  ];
}
