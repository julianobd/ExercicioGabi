import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }
  getToken(){
    return this.tokenService.getToken();
   }
   getUserId(){
     return this.tokenService.getUserId();
   }

   getServerId(){
     return this.tokenService.getServerId();
   }

   getItems(){
    return this.http.get(`https://hcs.dev4.com.br/api/Item/ListServerWithItems/${this.getToken()}/${this.getServerId()}`)
   }
   createItem(item){
      const dataItems = {
        name:item.name,
      health:item.health,
      vest:item.vest,
      experience:item.experience,
      hungry:item.hungry,
      money:item.money,
      statusPoint:item.statusPoint,
      isInitial:item.isInitial,
      isVirtual:item.isVirtual
      }
      return this.http.post(`https://hcs.dev4.com.br/api/Item/AddItemToServer/${this.getToken()}/${this.getServerId()}`, dataItems)
   }
}
