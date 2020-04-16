import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  GetAllClients() {
    return this.http.get( 'https://webportal.ntt.com.sg/cmp/basic/api/global/stackstorm-dd/clients');
  }

}
