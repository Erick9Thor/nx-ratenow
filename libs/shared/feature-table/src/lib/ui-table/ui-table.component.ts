import {AfterViewInit, Component, inject, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'nx-ratenow-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})

export class UiTableComponent implements AfterViewInit {
  _customPaginator!: number[];
  _elementData!: object[];
  dataSource!: MatTableDataSource<object>;
  _displayedColumns!: string[];
  value = "";
  durationInSeconds = 5;

  get elementData(): object[] {
    return this._elementData;
  }
  @Input() set elementData(value: object[]) {
    this._elementData = value;
    if (this._elementData != null && this._elementData.length > 0) {
      this.dataSource = new MatTableDataSource<object>(this._elementData);
    }
  }
  get displayedColumns(): string[] {
    return this._displayedColumns;
  }
  @Input() set displayedColumns(value: string[]) {
    this._displayedColumns = value;
  }
  get customPaginator(): number[] {
    return this._customPaginator;
  }
  @Input() set customPaginator(value: number[]) {
    this._customPaginator = value;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<object>;

  constructor(private _snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    if (this.value != "" && this.value != undefined) {
      this.dataSource.filter = this.value.trim().toLowerCase();
    } else {
      this.openSnackBar();
      this.dataSource.filter = "";
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  reset() {
    window.location.reload();
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.elementData.length);
    const data = this.dataSource.data;
    data.push(this.elementData[randomElementIndex]);
    this.dataSource.data = data;
    this.table.renderRows();
  }
}

@Component({
  selector: 'nx-ratenow-snack-filter',
  templateUrl: 'snack-bar-no-filter.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
