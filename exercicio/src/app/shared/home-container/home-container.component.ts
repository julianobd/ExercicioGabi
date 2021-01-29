import { Component, OnInit } from '@angular/core';
import { TokenService } from './../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  userName:string;
  constructor(
    private tokenService: TokenService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userName = this.tokenService.getUserName();


  }
  logOut(){
    console.log('works');
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
