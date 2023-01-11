import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './entry.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BenchmarkDashboardFeatureModule } from '@nx-ratenow/benchmark/dashboard/feature';

@NgModule({
  imports: [CommonModule, BenchmarkDashboardFeatureModule, TranslateModule],
  declarations: [RemoteEntryComponent],
  exports: [TranslateModule, RouterModule]
})
export class RemoteEntryModule {}
