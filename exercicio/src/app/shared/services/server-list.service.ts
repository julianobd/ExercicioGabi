import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ServerListService {
  expTable:any;

  constructor(private http:HttpClient, private tokenService:TokenService) {

   }

   getToken(){
     return this.tokenService.getToken()
   }
   getServerId(){
     return this.tokenService.getServerId()
   }

   getServerList(){
    return this.http.get(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.getToken()}`);
   }
   addExp(tabExp){
      return this.http.put(`http://hcs.dev4.com.br/api/Servers/EditExpTable/${this.getToken()}/${this.getServerId()}`,tabExp);
   }
   getdataServer(){
     return this.http.get(`http://hcs.dev4.com.br/api/Servers/GetServer/${this.getToken()}/${this.getServerId()}`)
   }

   updateExp(tabExp){
     return this.http.put(`http://hcs.dev4.com.br/api/Servers/EditExpTable/${this.getToken()}/${this.getServerId()}`,tabExp)
   }

}
