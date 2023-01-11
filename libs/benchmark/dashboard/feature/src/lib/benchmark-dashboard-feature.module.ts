import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMainComponent } from './view-main/view-main.component';
import { CoreFeaturePageLayoutModule } from '@nx-ratenow/core/feature-page-layout';
import { SharedFeatureBreadcrumbsModule } from '@nx-ratenow/shared/feature-breadcrumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { SharedFeatureTableModule } from '@nx-ratenow/shared/feature-table';
import { CoreFeatureTabPageModule } from '@nx-ratenow/core/feature-tab-page';
import { SelectorBenchmarkComponent } from './selector-benchmark/selector-benchmark.component';
import { SelectorQuestionnaireComponent } from './selector-questionnaire/selector-questionnaire.component';
import { TabDataComponent } from './tab-data/tab-data.component';

@NgModule({
  imports: [
    CommonModule,
    CoreFeaturePageLayoutModule,
    SharedFeatureBreadcrumbsModule,
    SharedFeatureTableModule,
    CoreFeatureTabPageModule,

    // TODO: This is a modal for add should stay on modals
    FormsModule,
    // MatTooltipModule,
    ReactiveFormsModule,
    // MatSelectModule,
    MatButtonToggleModule,

    RouterModule.forChild([
      {
        path: '',
        component: ViewMainComponent,
        children: [
          { path: '', redirectTo: 'benchmark-clients', pathMatch: 'full' },
          {
            path: 'benchmark-clients',
            pathMatch: 'full',
            component: SelectorBenchmarkComponent
          },
          {
            path: 'benchmark-clients/:id',
            pathMatch: 'full',
            component: SelectorQuestionnaireComponent
          }
        ]
      },
      {
        path: 'benchmark-clients/:id/:questionnaireId',
        pathMatch: 'full',
        component: TabDataComponent
      }
    ])
  ],
  declarations: [
    ViewMainComponent,
    SelectorBenchmarkComponent,
    SelectorQuestionnaireComponent,
    TabDataComponent
  ]
})
export class BenchmarkDashboardFeatureModule {}
