import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamsComponent } from './teams/teams.component';
import { AutomationComponent } from './automation/automation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditClientComponent } from './clients/create-edit-client/create-edit-client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'clients', component: ClientsComponent,
        children: [
          { path: 'create-edit', component: CreateEditClientComponent, data : {some_data : 'some value'} },
          { path: '**', component: ClientListComponent }
        ]
      },
      { path: 'teams', component: TeamsComponent },
      { path: 'automation', component: AutomationComponent },
      {
        path: '',
        redirectTo: '/clients',
        pathMatch: 'full'
      },
      { path: '**', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
