import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) {

   }
   getToken(){
    return this.tokenService.getToken()
   }
   getUsers(){
      return this.http.get(`https://hcs.dev4.com.br/api/Users/GetUsers/${this.getToken()}`)
  }
}
