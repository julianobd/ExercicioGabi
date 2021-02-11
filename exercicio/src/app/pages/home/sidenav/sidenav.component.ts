import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from './../../../shared/services/token.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  serverId:string;
  constructor(
    private tokenService:TokenService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
