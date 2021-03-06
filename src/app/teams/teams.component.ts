import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Teams } from '../common-models';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  addTeamsForm: FormGroup;
  modalRef: BsModalRef;
  IsChecked: boolean;
  showAddTeam: boolean;
  checkItem: Array<Teams>;
  filterValue: string;
  ELEMENT_DATA: Teams[] = [
    {name: 'ABC', description: 'ABC', businessentity: '', tags: '', teamSeqNo: ''},
    {name: 'XYZ', description: 'XYZ', businessentity: '', tags: '', teamSeqNo: ''},
    {name: 'UVW', description: 'UVW', businessentity: '', tags: '', teamSeqNo: ''},
    {name: 'PQR', description: 'PQR', businessentity: '', tags: '', teamSeqNo: ''}
  ];
  displayedColumns: string[] = ['name', 'description', 'businessentity', 'tags', 'Action'];
  dataSource = new MatTableDataSource();

  clientColumns: string[] = ['name', 'description'];
  clientSource = new MatTableDataSource(this.ELEMENT_DATA);

  addClientsColumns: string[] = ['Action', 'name', 'description'];
  addClientsSource = new MatTableDataSource(this.ELEMENT_DATA);

  automationColumns: string[] = ['name', 'description'];
  automationSource = new MatTableDataSource(this.ELEMENT_DATA);

  addAutomationColumns: string[] = ['Action', 'name', 'description'];
  addAutomationSource = new MatTableDataSource(this.ELEMENT_DATA);

  usersColumns: string[] = ['name', 'description'];
  usersSource = new MatTableDataSource(this.ELEMENT_DATA);

  addUsersColumns: string[] = ['Action', 'name', 'description'];
  addUsersSource = new MatTableDataSource(this.ELEMENT_DATA);
  selected = 'None';
  edited: boolean;
  showSpinner: boolean;
  seqNo: number;
  constructor(private fb: FormBuilder, public modalService: BsModalService,
              private apiService: ApiService) {
    this.addTeamsForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      businessentity: new FormControl('', Validators.required),
      tags: new FormControl('' , Validators.required),
    });
  }

  ngOnInit(): void {
    this.checkItem = [];
    this.showAddTeam = false;
    this.getAllTeamsData();
    this.edited = false;
  }

  addTeam(form) {
    if (this.edited && this.seqNo != null || this.seqNo !== undefined ) {
      this.apiService.updateTeam(this.seqNo, form.value).subscribe(data => {
        console.log('Team Edited');
      });
    } else {
      this.apiService.createTeam(form.value).subscribe(data => {
        console.log('Team Created');
      });
    }
  }
  editTeams(element) {
    this.showAddTeam = true;
    this.addTeamsForm.controls.name.setValue(element.name);
    this.addTeamsForm.controls.description.setValue(element.description);
    this.addTeamsForm.controls.businessentity.setValue(element.businessentity);
    this.seqNo = element.teamSeqNo;
    this.edited = true;
  }

  showaddTeamCard() {
    this.showAddTeam = !this.showAddTeam;
  }
  openModal(template: TemplateRef<any>) {
    const config = {
      class: 'modal-dialog-centered'
    };
    this.modalRef = this.modalService.show(template, config);
  }
  OnChange(event: any, el: Teams) {
    if (event.checked === true) {
      this.checkItem.push(el);
    } else {
      const item = this.checkItem.indexOf(el);
      if (item > -1) {
        this.checkItem.splice(item, 1);
      }
    }
  }

  submit() {
    console.log(this.checkItem);
  }

  getAllTeamsData() {
    this.showSpinner = true;
    this.apiService.getAllTeams().subscribe(response => {
      console.log(response);
      this.showSpinner = false;
      this.dataSource = new MatTableDataSource(response as any);
    });
  }

  searchValue(event: any) {
    this.showSpinner = true;
    this.filterValue = event.target.value;
    console.log(this.filterValue);
    this.apiService.searchTeams(this.filterValue).subscribe(data => {
      console.log(data);
      this.showSpinner = false;
      this.dataSource = new MatTableDataSource(data as any);
    });
  }

  deleteTeams(element) {
    this.apiService.deleteTeam(element.name).subscribe(data => {
      console.log('Team Deleted');
    });
  }
}
