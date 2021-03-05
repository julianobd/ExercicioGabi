import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../../../core/services/token.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName:string;
  constructor(
    private tokenService: TokenService,
    private router:Router,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.userName = this.tokenService.getUserName();
  }
  logOut(){
    console.log('works');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  changeServer(){
    this.location.back();
  }

}
