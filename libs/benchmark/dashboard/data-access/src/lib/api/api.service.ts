import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';
import {
  BenchMarkClient,
  tableBenchmarkClientData
} from '@nx-ratenow/benchmark/dashboard/feature';

@Injectable({
  providedIn: 'root'
})
export class BenchmarkApiService {
  constructor(private http: HttpClient) {}

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<object[]> = new ReplaySubject<object[]>(1);
  data$: Observable<object[]> = this.subject$.asObservable();

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

  getDataQuestionnaires(id: string | number) {
    return of(
      tableBenchmarkClientData.map(
        (benchMarkClient) => new BenchMarkClient(benchMarkClient)
      )
    );
  }
}
