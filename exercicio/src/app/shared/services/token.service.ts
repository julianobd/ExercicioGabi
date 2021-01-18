import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token:string;
  private serverId: string;
  private userId:string;
  private avataruuId:string;
  private banido:string;
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

  getAvatarId(){
    let avatarId = JSON.parse(sessionStorage.getItem('avatar'))
    this.avataruuId = avatarId;
    console.log(this.avataruuId);
    return this.avataruuId;
  }
  getBan(){
    let banned = JSON.parse(sessionStorage.getItem('banned'))
    this.banido = banned;
    return this.banido;
  }}
