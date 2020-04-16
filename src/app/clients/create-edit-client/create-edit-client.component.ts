import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-client',
  templateUrl: './create-edit-client.component.html',
  styleUrls: ['./create-edit-client.component.scss']
})
export class CreateEditClientComponent implements OnInit {
  addClientForm: FormGroup;
  hide:boolean = true;
  confhide:boolean = true;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addClientForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
 
    });
   
  }

  addClient(form){
    console.log(form)
  }

}
