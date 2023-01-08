import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'nx-ratenow-ui-page-layout',
  templateUrl: './ui-page-layout.component.html',
  styleUrls: ['./ui-page-layout.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'nx-ratenow-ui-page-layout'
  },
  encapsulation: ViewEncapsulation.None
})
export class UiPageLayoutComponent {
  @Input() mode: 'card' | 'simple' = 'simple';

  @HostBinding('class.ratenow-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.ratenow-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }
}
