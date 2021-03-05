import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../core/services/server.service';
import { Server } from '../../core/model/server';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
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
    private serverService: ServerService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serverService.getServerList().subscribe((res:any)=>
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
    this.router.navigate(['app-container',this.serverId,'home'],)
    sessionStorage.setItem('server', JSON.stringify(this.serverId));
  }


}
