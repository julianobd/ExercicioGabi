import { Component, OnInit } from '@angular/core';
import { ServerListService } from '../../shared/services/server-list.service';
import { Server } from './../../core/navbar/models/server';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  datalistServer:Server[];
  datalistServers:Server[];
  SERVERS: Server[];
  page = 1;
  pageSize = 6;
  collectionSize:number;
  myimg = '../../../assets/img/entrar 1.png';
  myimg1 = '../../../assets/img/cancel 2.png'
  myimg2 = '../../../assets/img/checked 1.png'
  indice:number;
  serverId:string;
  constructor(
    private serverListService: ServerListService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.serverListService.getServerList().subscribe((res:any)=>
    {
      this.datalistServers = res;
      this.SERVERS = res;
      this.refreshServers();

    }

    )

  }

    refreshServers(){
      this.collectionSize = this.SERVERS.length;
      this.datalistServers = this.SERVERS
      .map((datalistServer, i) => ({id: i + 1, ...datalistServer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    onServer(i){
      this.serverId = this.datalistServers[i].id;
      this.router.navigate(['home','server', this.serverId])
      sessionStorage.setItem('server', JSON.stringify(this.serverId));
    }

    }

