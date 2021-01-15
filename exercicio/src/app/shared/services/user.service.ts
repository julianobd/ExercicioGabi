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
   getUserId(){
     return this.tokenService.getUserId()
   }

   getUsers(){
      return this.http.get(`https://hcs.dev4.com.br/api/Users/GetUsers/${this.getToken()}`)
  }
  createUser(user){
    const dataUser = {
      name: user.name,
      email:user.email,
      password: user.password,
      permission:user.permission,
      serverId: user.serverId

    }
    return this.http.post(`https://hcs.dev4.com.br/api/Users/AddUser/${this.getToken()}`, dataUser)
  }

  deleteUser(){
    return this.http.delete(`https://hcs.dev4.com.br/api/Users/DelUser/${this.getToken()}/${this.getUserId()}`)
  }

  editUser(dataEdit){
    return this.http.put(`https://hcs.dev4.com.br/api/Users/EditUser/${this.getToken()}/${this.getUserId()}`,dataEdit)
  }
}
