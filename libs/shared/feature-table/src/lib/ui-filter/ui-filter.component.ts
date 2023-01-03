import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'nx-ratenow-ui-filter',
  templateUrl: './ui-filter.component.html',
  styleUrls: ['./ui-filter.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UiFilterComponent {
  _elementData!: object[];
  dataSource!: MatTableDataSource<object>;

  selectedValue!: string;
  nombres: string[] = ['ATC', 'Torrecárdenas', 'Brunch', 'Cake', '&'];

  get elementData(): object[] {
    return this._elementData;
  }
  @Input() set elementData(value: object[]) {
    this._elementData = value;
    if (this._elementData != null && this._elementData.length > 0) {
      this.dataSource = new MatTableDataSource<object>(this._elementData);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
