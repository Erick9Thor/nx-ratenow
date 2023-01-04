import { Component } from '@angular/core';
import { NavigationService } from '@nx-ratenow/core/data-access-layaout';

@Component({
  selector: 'nx-ratenow-ui-navigation',
  templateUrl: './ui-navigation.component.html',
  styleUrls: ['./ui-navigation.component.scss']
})
export class UiNavigationComponent {
  items = this.navigationService.items;

  constructor(private navigationService: NavigationService) {}
}
