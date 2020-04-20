import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './materail/materail.module';
import { ClientsComponent } from './clients/clients.component';
import { AutomationComponent } from './automation/automation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditClientComponent } from './clients/create-edit-client/create-edit-client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';

import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientAddOrgComponent } from './clients/client-add-org/client-add-org.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TeamsComponent } from './teams/teams.component';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    TeamsComponent,
    AutomationComponent,
    DashboardComponent,
    CreateEditClientComponent,
    ClientListComponent,
    ClientAddOrgComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    TagInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
