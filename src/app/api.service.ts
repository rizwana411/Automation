import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients, Organization, Teams } from './common-models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}

  GetAllClients() {
    return this.http.get('/cmp/api/global/stackstorm-dd/clients');
  }

  searchClient(searchterm:string){
    return this.http.get('/cmp/basic/api/global/stackstorm-dd/client?name=' + searchterm);
  }

  creatClient(client:Clients[]){
    return this.http.post('/cmp/basic/api/global/stackstorm-dd/client',client);
  }

  getClientDetails(seqNo:number){
    return this.http.get('/cmp/basic/api/global/stackstorm-dd/clientdetails?seqNo=' + seqNo);
  }
  updateClient(seqNo:number,client:Clients[]){
    return this.http.post('/cmp/basic/api/global/stackstorm-dd/client?seqNo='+ seqNo,client);
  }

  bindOrganization(seqNo:number,orgs:Organization[]){
    return this.http.post('/cmp/basic/api/global/stackstorm-dd/bindorgtoclient?seqNo='+seqNo,orgs);
  }

  getAllTeams() {
    return this.http.get('/cmp/api/global/stackstorm-dd/teams');
  }

  searchTeams(getTeamDetails: string) {
    return this.http.get('/cmp/api/global/stackstorm-dd/team?name=' + getTeamDetails);
  }

  createTeam(team: Teams[]) {
    return this.http.post('/cmp/api/global/stackstorm-dd/team', team);
  }

  updateTeam(seqNo: number, team: Teams[]) {
    return this.http.post('/cmp/api/global/stackstorm-dd/team?teamSeqNo=' + seqNo, team);
  }

  deleteTeam(name: string) {
    return this.http.delete('/cmp/api/global/stackstorm-dd/team?name=' + name);
  }
}
