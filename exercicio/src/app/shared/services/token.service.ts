import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token:string;
  private serverId: string;
  private userId:string;
  constructor(private http:HttpClient) { }

  getToken(){
    let user = JSON.parse(sessionStorage.getItem('user'))
    this.token = user.token;
    console.log('token salvo', this.token)
    return this.token;
  }
  getServerId(){
    let server = JSON.parse(sessionStorage.getItem('server'))
    this.serverId = server.id;
    console.log('id salvo', this.serverId)
    return this.serverId;

  }
  getUserId(){
    let userID = JSON.parse(sessionStorage.getItem('userid'))
    this.userId = userID;
    console.log(this.userId);
    return this.userId;
  }
}
