import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Clients } from 'src/app/common-models';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {


  ELEMENT_DATA: Clients[] = [
    {username: 'admin', fname: 'ABC', lname: 'PQR'},
    {username: 'awxadmin', fname: 'XYZ', lname: 'UVW'},
    {username: 'admin1', fname: 'UVW', lname: 'XYZ'},
    {username: 'admin2', fname: 'PQR', lname: 'ABC'}
  ];
  displayedColumns: string[] = ['username', 'fname', 'lname', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  constructor() { }


}
