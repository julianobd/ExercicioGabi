import { Component, OnInit } from '@angular/core';
import { ServerListService } from '../../shared/services/server-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { JobsService } from './../../shared/services/jobs.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  /*datalistServer:any;
  dataList:any;
  showdataServ:boolean = false;
  tabExp:any;
  experience:FormGroup;*/
  serverId:any;
  avbItems:number;
  jobs:number;

  constructor(
    private serverListService: ServerListService,
    private router:Router,
    private route: ActivatedRoute,
    private jobsService:JobsService) {
    }


  ngOnInit(): void {
    this.serverId = this.route.snapshot.paramMap.get('id');
    this.serverListService.getdataServer().subscribe((res:any)=>{
      this.avbItems = res.availableItems.length;
    })
    this.jobsService.getJobs().subscribe((res:any)=>{
      console.log(res)
      this.jobs = res.length;
    })

  }
  /*listServer(){
    this.showdataServ = false;
    this.serverListService.getServerList().subscribe((res:any)=>
    {
      this.datalistServer = res;
     }

    )}
    showServer(i){
    this.showdataServ = true;
    //console.log(this.datalistServer[i].name)
    this.dataList = this.datalistServer[i];
    //console.log(this.datalistServer[i].id)
    this.tabExp = this.dataList.expTable;
    sessionStorage.setItem('server', JSON.stringify(this.datalistServer[i]));
    this.serverId = this.datalistServer[i].id;
    }*/
    user(){
      this.router.navigate(['/user'])
    }


}
