import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoreMaterialModule } from '@nx-ratenow/core/material';

@NgModule({
  imports: [CommonModule, CoreMaterialModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class CoreFeatureToolbarModule {}
