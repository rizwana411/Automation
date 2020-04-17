import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Clients } from 'src/app/common-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {


  ELEMENT_DATA: Clients[] = [
    {name: 'admin', desc: 'ABC'},
    {name: 'awxadmin', desc: 'XYZ'},
    {name: 'admin1', desc: 'UVW'},
    {name: 'admin2', desc: 'PQR'}
  ];
  displayedColumns: string[] = ['name', 'desc', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  addClientForm: FormGroup;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  showAddClient:boolean = false;
  
  constructor(public apiService:ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.addClientForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],

    });
    this.getAllClients();
  }

  getAllClients(){
    this.apiService.GetAllClients().subscribe(data =>{
      console.log(data)
      //this.dataSource = new MatTableDataSource([data]);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }
  addClient(form) {
    console.log(form);
  }

  editClient(element){
    console.log(element);
    this.showAddClient = true;
  }



}
