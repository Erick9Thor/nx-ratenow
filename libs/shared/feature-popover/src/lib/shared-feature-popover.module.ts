import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPopoverComponent } from './ui-popover/ui-popover.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [UiPopoverComponent]
})
export class SharedFeaturePopoverModule {}
