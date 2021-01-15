import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServerListService } from '../../shared/services/server-list.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
  datalistServer:any;
  dataList:any;
  showdataServ:boolean = false;
  tabExp:any;
  experience:FormGroup;
  serverId:any;

  constructor(private serverListService: ServerListService,private router:Router, private fb: FormBuilder) {
    this.experience = this.fb.group({
      level:'',
      exp:'',
      title:''
    })

   }
  ngOnInit(): void {
  }
  listServer(){
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
    }
    user(){
      this.router.navigate(['/user'])
    }


}
