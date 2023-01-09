import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiScrollbarComponent } from './ui-scrollbar/ui-scrollbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiScrollbarComponent],
  exports: [UiScrollbarComponent]
})
export class SharedFeatureScrollbarModule {}
