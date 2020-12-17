import { Component, OnInit } from '@angular/core';
import { ServerListService } from '../../../../shared/services/server-list.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.sass']
})
export class ServerListComponent implements OnInit {
  datalistServer:any;
  constructor(private serverListService: ServerListService) { }

  ngOnInit(): void {
  }

  listServer(){
    this.serverListService.getServerList().subscribe((res:any)=>
    {console.log(res)
    this.datalistServer = res}

    )}

}
