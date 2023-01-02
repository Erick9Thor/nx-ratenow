import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from '@nx-ratenow/core/material';
import { UiTableComponent } from './ui-table/ui-table.component';
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  imports: [CommonModule, CoreMaterialModule, MatSortModule],
  declarations: [UiTableComponent],
  exports: [UiTableComponent],
})
export class SharedFeatureTableModule {}
