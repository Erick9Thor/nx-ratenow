import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import {
  BenchMarkClient,
  columnsBenchMarkClient,
  tableBenchmarkClientData
} from '../interfaces/customer.model';

@Component({
  selector: 'nx-ratenow-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<object[]> = new ReplaySubject<object[]>(1);
  data$: Observable<object[]> = this.subject$.asObservable();

  dataBinding!: object[];

  columnsBenchMarkClient = columnsBenchMarkClient;

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.subject$.next(data);
    });

    this.data$.pipe(filter<object[]>(Boolean)).subscribe((data) => {
      this.dataBinding = data;
    });
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(
      tableBenchmarkClientData.map(
        (benchMarkClient) => new BenchMarkClient(benchMarkClient)
      )
    );
  }
}
