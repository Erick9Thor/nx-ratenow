import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'nx-ratenow-ui-quickpanel',
  templateUrl: './ui-quickpanel.component.html',
  styleUrls: ['./ui-quickpanel.component.scss']
})
export class UiQuickpanelComponent {
  date = DateTime.local().toFormat('DD');
  dayName = DateTime.local().toFormat('EEEE');
}
