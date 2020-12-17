import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ServerListService {

  constructor(private http:HttpClient, private tokenService:TokenService) {

   }

   getToken(){
     return this.tokenService.getToken()
   }

   getServerList(){
    return this.http.get(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.getToken()}`);
   }
}
