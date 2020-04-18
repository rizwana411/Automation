import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Teams } from '../common-models';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  ELEMENT_DATA: Teams[] = [
    {name: 'ABC', description: 'ABC'},
    {name: 'XYZ', description: 'XYZ'},
    {name: 'UVW', description: 'UVW'},
    {name: 'PQR', description: 'PQR'}
  ];
  displayedColumns: string[] = ['name', 'description', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

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

  constructor(private fb: FormBuilder, public modalService: BsModalService) {
    this.addTeamsForm = this.fb.group({
      Name: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      clientName: new FormControl('', Validators.required),
      clientDescription: new FormControl('', Validators.required),
      automationName: new FormControl('', Validators.required),
      automationDescription: new FormControl('', Validators.required),
      usersName: new FormControl('', Validators.required),
      usersDescription: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.checkItem = [];
    this.showAddTeam = false;
  }

  addTeam(form) {
    console.log(form.value);
  }
  editTeams(element) {
    console.log(element);
    this.showAddTeam = true;
    this.addTeamsForm.controls.Name.setValue(element.name);
    this.addTeamsForm.controls.Description.setValue(element.description);
    this.addTeamsForm.controls.clientName.setValue(element.clientName);
    this.addTeamsForm.controls.clientDescription.setValue(element.clientDescription);
    this.addTeamsForm.controls.automationName.setValue(element.automationName);
    this.addTeamsForm.controls.automationDescription.setValue(element.automationDescription);
    this.addTeamsForm.controls.usersName.setValue(element.usersName);
    this.addTeamsForm.controls.usersDescription.setValue(element.usersDescription);
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
    // console.log(this.checkItem);
  }

  submit() {
    console.log(this.checkItem);
  }
}
