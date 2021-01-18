import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpMachineService {

  constructor(
    private tokenService:TokenService,
    private http: HttpClient
  ) {
   }

   getToken(){
     return this.tokenService.getToken();
   }
   getServerId(){
     return this.tokenService.getServerId();
   }

   listExpMach(){
     return this.http.get(`https://hcs.dev4.com.br/api/ExpMachines/GetExpMachines/${this.getToken()}/${this.getServerId()}`)
   }



}
