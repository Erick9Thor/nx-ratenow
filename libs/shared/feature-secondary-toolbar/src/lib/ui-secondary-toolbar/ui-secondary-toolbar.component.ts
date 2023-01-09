import { Component, Input } from '@angular/core';
import { ConfigService } from '@nx-ratenow/core/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nx-ratenow-ui-secondary-toolbar',
  templateUrl: './ui-secondary-toolbar.component.html',
  styleUrls: ['./ui-secondary-toolbar.component.scss']
})
export class UiSecondaryToolbarComponent {
  @Input() current!: string;
  @Input() crumbs!: string[];

  fixed$: Observable<boolean> = this.configService.config$.pipe(
    map((config) => {
      if (config) return config.toolbar.fixed;
      else return false;
    })
  );

  isVerticalLayout$: Observable<boolean> = this.configService
    .select((config) => config.layout)
    .pipe(map((layout) => layout === 'vertical'));

  constructor(private readonly configService: ConfigService) {}
}
