import {
  AfterContentInit,
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
        appearance: 'fill'
      } as unknown as MatFormFieldDefaultOptions
    }
  ]
})
export class UiTableComponent implements OnInit, AfterContentInit {
  @Input() set columns(value: TableColumn<object>[]) {
    this._columns = value;
  }

  get columns(): TableColumn<object>[] {
    return this._columns;
  }

  @Input() set data(value: object[]) {
    if (value.length > 0) {
      this._data = value;
    }
  }

  get data(): object[] {
    return this._data;
  }

  @Input() addable = true;

  dataSource!: MatTableDataSource<object>;

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  selection = new SelectionModel<object>(true, []);
  searchCtrl = new UntypedFormControl();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable, { static: true }) table!: MatTable<object>;

  _columns: TableColumn<object>[] = [];
  _data: object[] = [];

  ngOnInit() {
    this.dataSource = new MatTableDataSource();

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterContentInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = this._data;
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
    //   .open(objectCreateUpdateComponent)
    //   .afterClosed()
    //   .subscribe((object: object) => {
    //     /**
    //      * object is the updated object (if the user pressed Save - otherwise it's null)
    //      */
    //     if (object) {
    //       /**
    //        * Here we are updating our local array.
    //        * You would probably make an HTTP request here.
    //        */
    //       this.objects.unshift(new object(object));
    //       this.subject$.next(this.objects);
    //     }
    //   });
  }

  updateObject(object: any) {
    // this.dialog
    //   .open(objectCreateUpdateComponent, {
    //     data: object
    //   })
    //   .afterClosed()
    //   .subscribe((updatedobject) => {
    //     /**
    //      * object is the updated object (if the user pressed Save - otherwise it's null)
    //      */
    //     if (updatedobject) {
    //       /**
    //        * Here we are updating our local array.
    //        * You would probably make an HTTP request here.
    //        */
    //       const index = this.objects.findIndex(
    //         (existingobject) => existingobject.id === updatedobject.id
    //       );
    //       this.objects[index] = new object(updatedobject);
    //       this.subject$.next(this.objects);
    //     }
    //   });
  }

  deleteObject(object: any) {
    // /**
    //  * Here we are updating our local array.
    //  * You would probably make an HTTP request here.
    //  */
    // this.objects.splice(
    //   this.objects.findIndex(
    //     (existingobject) => existingobject.id === object.id
    //   ),
    //   1
    // );
    // this.selection.deselect(object);
    // this.subject$.next(this.objects);
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
    // const index = this.objects.findIndex((c) => c === row);
    // this.objects[index].labels = change.value;
    // this.subject$.next(this.objects);
  }
}
