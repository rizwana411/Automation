import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients, Organization } from './common-models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

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


}
