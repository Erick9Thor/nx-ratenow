import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from '@nx-ratenow/core/material';
import { UiTableComponent } from './ui-table/ui-table.component';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiFilterComponent } from './ui-filter/ui-filter.component';

@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [UiTableComponent, UiFilterComponent],
  exports: [UiTableComponent],
})
export class SharedFeatureTableModule {}
