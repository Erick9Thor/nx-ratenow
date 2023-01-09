import { Component } from '@angular/core';
import { delayWhen, interval, Observable, of } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'nx-ratenow-ui-progress-bar-loader',
  templateUrl: './ui-progress-bar-loader.component.html',
  styleUrls: ['./ui-progress-bar-loader.component.scss']
})
export class UiProgressBarLoaderComponent {
  value$: Observable<number> = this.loader
    .useRef('router')
    .value$.pipe(
      delayWhen((value) => (value === 0 ? interval(200) : of(undefined)))
    );

  constructor(public loader: LoadingBarService) {}
}
