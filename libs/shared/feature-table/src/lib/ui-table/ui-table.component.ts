import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
