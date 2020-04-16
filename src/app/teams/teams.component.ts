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
  checkItem: Array<Teams>;
  ELEMENT_DATA: Teams[] = [
    {name: 'ABC', description: 'qwerty'},
    {name: 'XYZ', description: 'qwerty'},
    {name: 'UVW', description: 'qwerty'},
    {name: 'PQR', description: 'qwerty'}
  ];
  displayedColumns: string[] = ['name', 'description', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns1: string[] = ['Action', 'name', 'description'];
  dataSource1 = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private fb: FormBuilder, public modalService: BsModalService) {
    this.addTeamsForm = this.fb.group({
      Name: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.checkItem = [];
  }

  addTeam(form) {
    console.log(form.value);
  }
  editTeams(element) {
    console.log(element);
    this.addTeamsForm.controls.Name.setValue(element.name);
    this.addTeamsForm.controls.Description.setValue(element.description);
  }

  openModal(template: TemplateRef<any>) {
    const config = {
      class: 'modal-dialog-centered'
    };
    this.modalRef = this.modalService.show(template, config);
  }
  OnChange(event: any, el: Teams) {
    // console.log(event, el);
    if (event.checked === true) {
      this.checkItem.push(el);
    } else {
      const item = this.checkItem.indexOf(el);
      if (item > -1) {
        this.checkItem.splice(item, 1);
      }
    }
    console.log(this.checkItem);
  }
  submit() {
    console.log(this.checkItem);
  }
}
