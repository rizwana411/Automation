import { Component, OnInit, TemplateRef } from '@angular/core';
import { Organization } from 'src/app/common-models';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-client-add-org',
  templateUrl: './client-add-org.component.html',
  styleUrls: ['./client-add-org.component.scss']
})
export class ClientAddOrgComponent implements OnInit {

  ELEMENT_DATA: Organization[] = [
    {instance: 'admin', organization: 'ABC'},
    {instance: 'awxadmin', organization: 'XYZ'},
    {instance: 'admin1', organization: 'UVW'},
    {instance: 'admin2', organization: 'PQR'}
  ];
  displayedColumns: string[] = ['instance', 'organization'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns1: string[] = ['Action', 'instance', 'organization'];
  addorg = new MatTableDataSource(this.ELEMENT_DATA);
  modalRef: BsModalRef;
  IsChecked: boolean;
  checkItem: Array<Organization>;
  constructor(public modalService: BsModalService) { }

  ngOnInit(): void {
    this.IsChecked = false;
    this.checkItem = [];
  }
  openModal(template: TemplateRef<any>) {
    const config = {
      class: 'modal-dialog-centered'
    };
    this.modalRef = this.modalService.show(template, config);
  }
  OnChange(event: any, el: Organization) {
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
