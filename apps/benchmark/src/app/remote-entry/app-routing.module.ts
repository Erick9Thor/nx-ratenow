import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@nx-ratenow/benchmark/dashboard/feature').then(
        (module) => module.BenchmarkDashboardFeatureModule
      )
  },
  {
    path: '**',
    redirectTo: '/benchmark'
  }
];
@NgModule({
  imports: [TranslateModule, RouterModule.forChild(routes)],
  exports: [TranslateModule, RouterModule]
})
export class AppRoutingModule {}
