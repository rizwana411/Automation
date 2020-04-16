import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddOrgComponent } from './client-add-org.component';

describe('ClientAddOrgComponent', () => {
  let component: ClientAddOrgComponent;
  let fixture: ComponentFixture<ClientAddOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAddOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
