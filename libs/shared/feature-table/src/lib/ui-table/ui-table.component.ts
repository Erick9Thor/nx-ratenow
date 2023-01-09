import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms, stagger40ms } from '@nx-ratenow/core/animations';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions
} from '@angular/material/form-field';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UntypedFormControl } from '@angular/forms';
import { TableColumn } from '../interfaces/table.model';
import { MatSelectChange } from '@angular/material/select';

@UntilDestroy()
@Component({
  selector: 'nx-ratenow-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as unknown as MatFormFieldDefaultOptions
    }
  ]
})
export class UiTableComponent implements OnInit, AfterViewInit {
  @Input() set columns(value: TableColumn<object>[]) {
    this._columns = value;
  }

  get columns(): TableColumn<object>[] {
    return this._columns;
  }

  dataSource!: MatTableDataSource<object>;

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  selection = new SelectionModel<object>(true, []);
  searchCtrl = new UntypedFormControl();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable, { static: true }) table!: MatTable<object>;

  _columns: TableColumn<object>[] = [];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  createObject() {
    // this.dialog
    //   .open(CustomerCreateUpdateComponent)
    //   .afterClosed()
    //   .subscribe((customer: Customer) => {
    //     /**
    //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
    //      */
    //     if (customer) {
    //       /**
    //        * Here we are updating our local array.
    //        * You would probably make an HTTP request here.
    //        */
    //       this.customers.unshift(new Customer(customer));
    //       this.subject$.next(this.customers);
    //     }
    //   });
  }

  updateObject(customer: any) {
    // this.dialog
    //   .open(CustomerCreateUpdateComponent, {
    //     data: customer
    //   })
    //   .afterClosed()
    //   .subscribe((updatedCustomer) => {
    //     /**
    //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
    //      */
    //     if (updatedCustomer) {
    //       /**
    //        * Here we are updating our local array.
    //        * You would probably make an HTTP request here.
    //        */
    //       const index = this.customers.findIndex(
    //         (existingCustomer) => existingCustomer.id === updatedCustomer.id
    //       );
    //       this.customers[index] = new Customer(updatedCustomer);
    //       this.subject$.next(this.customers);
    //     }
    //   });
  }

  deleteObject(customer: any) {
    // /**
    //  * Here we are updating our local array.
    //  * You would probably make an HTTP request here.
    //  */
    // this.customers.splice(
    //   this.customers.findIndex(
    //     (existingCustomer) => existingCustomer.id === customer.id
    //   ),
    //   1
    // );
    // this.selection.deselect(customer);
    // this.subject$.next(this.customers);
  }

  toggleColumnVisibility(
    column: any,
    event: { stopPropagation: () => void; stopImmediatePropagation: () => void }
  ) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: any) {
    // const index = this.customers.findIndex((c) => c === row);
    // this.customers[index].labels = change.value;
    // this.subject$.next(this.customers);
  }
}
