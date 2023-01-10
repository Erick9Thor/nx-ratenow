import { Component, OnInit } from '@angular/core';
import { BenchmarkApiService } from '@nx-ratenow/benchmark/dashboard/data-access';
import { columnsBenchMarkClient } from '@nx-ratenow/benchmark/dashboard/feature';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nx-ratenow-selector-benchmark',
  templateUrl: './selector-benchmark.component.html',
  styleUrls: ['./selector-benchmark.component.scss']
})
export class SelectorBenchmarkComponent implements OnInit {
  addable = false;

  dataBinding!: object[];

  columnsBenchMarkClient = columnsBenchMarkClient;

  constructor(private benchmarkApiService: BenchmarkApiService) {}

  ngOnInit() {
    this.benchmarkApiService.getData().subscribe((data) => {
      this.benchmarkApiService.subject$.next(data);
    });

    this.benchmarkApiService.data$
      .pipe(filter<object[]>(Boolean))
      .subscribe((data) => {
        this.dataBinding = data;
      });
  }
}
