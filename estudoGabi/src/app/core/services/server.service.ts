import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  expTable:any;
  constructor(
    private http:HttpClient,
    private tokenService:TokenService
  ) { }
  getToken(){
    return this.tokenService.getToken()
  }
  getServerId(){
    return this.tokenService.getServerId()
  }

  serverCreate(dados){
       return this.http.post(`https://hcs.dev4.com.br/api/Servers/AddServers/${this.getToken()}`, dados)

  }

  getServerList(){
   return this.http.get(`https://hcs.dev4.com.br/api/Servers/ListServers/${this.getToken()}`);
  }
  addExp(tabExp){
     return this.http.put(`https://hcs.dev4.com.br/api/Servers/EditExpTable/${this.getToken()}/${this.getServerId()}`,tabExp);
  }
  getdataServer(){
    return this.http.get(`https://hcs.dev4.com.br/api/Servers/GetServer/${this.getToken()}/${this.getServerId()}`)
  }

  updateExp(tabExp){
    return this.http.put(`https://hcs.dev4.com.br/api/Servers/EditExpTable/${this.getToken()}/${this.getServerId()}`,tabExp)
  }

  updateServer(serverData){
    return this.http.put(`https://hcs.dev4.com.br/api/Servers/EditServer/${this.getToken()}/${this.getServerId()}`,serverData)
   }
   updateAvb(tabAvb){
     return this.http.put(`https://hcs.dev4.com.br/api/Servers/EditAvailableItems/${this.getToken()}/${this.getServerId()}`,tabAvb)
   }
}
