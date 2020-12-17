import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly apiUrl:string;

  constructor(private http:HttpClient) {
    this.apiUrl = 'http://hcs.dev4.com.br/api/Login/Login';
  }

  postLogin(login){
    const dataLogin = {
      email: login.email,
      password: login.password
    }
    return this.http.post(`${this.apiUrl}`,dataLogin)
  }
}
