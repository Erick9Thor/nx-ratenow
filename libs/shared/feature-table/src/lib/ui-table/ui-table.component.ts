import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'nx-ratenow-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})

export class UiTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Estado', 'Usuarios'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // filterValue = filterValue.trim().toLowerCase();
    // for (let i = 0; i < accent.length; i++) {
    //   filterValue = filterValue.replace(accent[i], replaceAccent[i]);
    // }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // @Input() displayedColumns: string[] | undefined = ['position', 'name', 'weight', 'symbol'];
  // @Input() dataSource: any = "";

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
  //
  // const accent: string[] = ['/[\340-\346]/g', '/[\350-\353]/g', '/[\354-\357]/g', '/[\362-\370]/g', '/[\371-\374]/g',]
  // const replaceAccent: string[] = ['a','e','i','o','u'];

export interface PeriodicElement {
  Nombre: string;
  Id: number;
  Estado: number;
  Usuarios: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, Nombre: 'ATC', Estado: 1.0079, Usuarios: '5'},
  {Id: 2, Nombre: 'Torrecárdenas', Estado: 4.0026, Usuarios: '21'},
  {Id: 3, Nombre: 'Brunch & Cake', Estado: 6.941, Usuarios: '7'},
  {Id: 4, Nombre: 'Beryllium', Estado: 9.0122, Usuarios: '9'},
  {Id: 5, Nombre: 'Boron', Estado: 10.811, Usuarios: '1'},
  {Id: 6, Nombre: 'Sofia', Estado: 12.0107, Usuarios: '5'},
  {Id: 7, Nombre: 'Nitrogen', Estado: 14.0067, Usuarios: 'N'},
  {Id: 8, Nombre: 'Oxygen', Estado: 15.9994, Usuarios: 'O'},
  {Id: 9, Nombre: 'Fluorine', Estado: 18.9984, Usuarios: 'F'},
  {Id: 10, Nombre: 'Neon', Estado: 20.1797, Usuarios: 'Ne'},
  {Id: 11, Nombre: 'Sodium', Estado: 22.9897, Usuarios: 'Na'},
  {Id: 12, Nombre: 'Magnesium', Estado: 24.305, Usuarios: 'Mg'},
  {Id: 13, Nombre: 'Aluminum', Estado: 26.9815, Usuarios: 'Al'},
  {Id: 14, Nombre: 'Silicon', Estado: 28.0855, Usuarios: 'Si'},
  {Id: 15, Nombre: 'Phosphorus', Estado: 30.9738, Usuarios: 'P'},
  {Id: 16, Nombre: 'Sulfur', Estado: 32.065, Usuarios: 'S'},
  {Id: 17, Nombre: 'Chlorine', Estado: 35.453, Usuarios: 'Cl'},
  {Id: 18, Nombre: 'Argon', Estado: 39.948, Usuarios: 'Ar'},
  {Id: 19, Nombre: 'Potassium', Estado: 39.0983, Usuarios: 'K'},
  {Id: 20, Nombre: 'Calcium', Estado: 40.078, Usuarios: 'Ca'},
];
