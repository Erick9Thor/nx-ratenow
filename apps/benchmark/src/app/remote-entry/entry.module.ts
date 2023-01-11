import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BenchmarkDashboardFeatureModule } from '@nx-ratenow/benchmark/dashboard/feature';

@NgModule({
  imports: [CommonModule, BenchmarkDashboardFeatureModule, TranslateModule],
  exports: [TranslateModule, RouterModule]
})
export class RemoteEntryModule {}
