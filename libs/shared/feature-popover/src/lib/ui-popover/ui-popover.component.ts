import { Component, TemplateRef } from '@angular/core';
import { PopoverContent, PopoverRef } from './popover-ref';

@Component({
  selector: 'nx-ratenow-ui-popover',
  templateUrl: './ui-popover.component.html',
  styleUrls: ['./ui-popover.component.scss']
})
export class UiPopoverComponent {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context: { close: (data?: any) => void } | undefined;

  constructor(private popoverRef: PopoverRef) {}

  ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }

    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
}
