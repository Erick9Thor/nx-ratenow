import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy
} from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'nx-ratenow-ui-scrollbar',
  templateUrl: './ui-scrollbar.component.html',
  styleUrls: ['./ui-scrollbar.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'nx-ratenow-ui-scrollbar'
  }
})
export class UiScrollbarComponent implements AfterContentInit, OnDestroy {
  @Input() options: Partial<any> | undefined;

  scrollbarRef: SimpleBar | undefined;

  constructor(private _element: ElementRef, private zone: NgZone) {}

  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new SimpleBar(
        this._element.nativeElement,
        this.options
      );
    });
  }

  ngOnDestroy(): void {
    /**
     * Exists, but not typed in the type definition
     * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
     */
    if (this.scrollbarRef && (this.scrollbarRef as any).unMount) {
      (this.scrollbarRef as any).unMount();
    }
  }
}
