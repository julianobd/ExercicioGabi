
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServerListService }  from '../../../../shared/services/server-list.service'
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.sass']
})
export class ServerCreateComponent implements OnInit {
  dataServer:FormGroup;
  datanewServer:any;
  serverId: any;

  constructor(
    private fb: FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.dataServer = this.fb.group({
      name:'',
      shared:'',
      hasDisease:'',
      initialMoney:'',
      initialStatsPoints:''
    })
   }

  ngOnInit(): void {

  }
  saveCreate(){
    this.datanewServer = this.dataServer.value;
    console.log(this.datanewServer);
    this.serverListService.serverCreate(this.datanewServer).pipe(take(1)).subscribe(res=>{
      console.log(res)
      this.serverId = res;

    })




  }
}
