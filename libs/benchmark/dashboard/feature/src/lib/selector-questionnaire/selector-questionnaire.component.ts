import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BenchmarkApiService } from '@nx-ratenow/benchmark/dashboard/data-access';
import { columnsBenchMarkQuestionnaire } from '@nx-ratenow/benchmark/dashboard/feature';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nx-ratenow-selector-questionnaire',
  templateUrl: './selector-questionnaire.component.html',
  styleUrls: ['./selector-questionnaire.component.scss']
})
export class SelectorQuestionnaireComponent implements OnInit {
  addable = true;

  dataBinding!: object[];

  columnsBenchMarkQuestionnaire = columnsBenchMarkQuestionnaire;

  constructor(
    private benchmarkApiService: BenchmarkApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const benchmarkClient = this.activatedRoute.snapshot.paramMap.get('id');

    if (benchmarkClient) {
      this.benchmarkApiService
        .getDataQuestionnaires(benchmarkClient)
        .subscribe((data) => {
          this.benchmarkApiService.subject$.next(data);
        });
    }

    this.benchmarkApiService.data$
      .pipe(filter<object[]>(Boolean))
      .subscribe((data) => {
        this.dataBinding = data;
      });
  }
}
