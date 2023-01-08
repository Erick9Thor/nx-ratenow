import { Component, OnInit, TemplateRef } from '@angular/core';
import { popoverAnimation } from '@nx-ratenow/core/animations';
import { PopoverContent, PopoverRef } from '../models/popover-ref';

@Component({
  selector: 'nx-ratenow-ui-popover',
  templateUrl: './ui-popover.component.html',
  styleUrls: ['./ui-popover.component.scss'],
  animations: [popoverAnimation]
})
export class UiPopoverComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context: any;

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
