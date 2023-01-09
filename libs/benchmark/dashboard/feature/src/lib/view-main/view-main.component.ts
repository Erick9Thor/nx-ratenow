import { Component, OnInit } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { UntypedFormControl } from '@angular/forms';
import { aioTableData, Customer } from '../interfaces/customer.model';

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
  subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
  data$: Observable<Customer[]> = this.subject$.asObservable();
  dataSource!: MatTableDataSource<Customer>;

  customers!: Customer[];

  ngOnInit() {
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
    });

    this.data$.pipe(filter<Customer[]>(Boolean)).subscribe((customers) => {
      this.customers = customers;
      if (this.dataSource) this.dataSource.data = customers;
    });
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(aioTableData.map((customer) => new Customer(customer)));
  }
}
