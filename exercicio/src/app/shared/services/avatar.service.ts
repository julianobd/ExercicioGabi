import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

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

  getAvatarId(){
    return this.tokenService.getAvatarId()
  }
  getBan(){
    return this.tokenService.getBan()
  }

  getAvatarlist(){
    return this.http.get(`https://hcs.dev4.com.br/api/Avatar/ListAvatars/${this.getToken()}/${this.getServerId()}`);
  }
  updateAvatar(dataAv){
      return this.http.put(`https://hcs.dev4.com.br/api/Avatar/EditAvatar/${this.getToken()}/${this.getAvatarId()}`, dataAv)
  }
  banir(reason){
    return this.http.put(`https://hcs.dev4.com.br/api/Avatar/BanAvatar/${this.getToken()}/${this.getAvatarId()}/${this.getBan()}`,reason)
  }
  desbanir(datareason){
    return this.http.put(`https://hcs.dev4.com.br/api/Avatar/UnbanAvatar/${this.getToken()}/${this.getAvatarId()}`,datareason)

  }
}
