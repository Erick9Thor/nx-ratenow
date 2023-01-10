import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-ratenow/benchmark/dashboard/feature').then(
        (module) => module.BenchmarkDashboardFeatureModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [TranslateModule, RouterModule]
})
export class AppRoutingModule {}
