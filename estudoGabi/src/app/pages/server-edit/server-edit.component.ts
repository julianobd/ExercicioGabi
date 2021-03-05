import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ServerService } from '../../core/services/server.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class ServerEditComponent implements OnInit {
  dataServer: FormGroup;
  dataServers:any;
  dataUpdateServer:any[];
  dataParcels:any;
  constructor(
    private fb:FormBuilder,
    private serverService: ServerService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataServer = this.fb.group({
      name:[null],
      shared:[null],
      hasDisease:[null],
      initialMoney:[null],
      initialStatsPoints:[null]
    })
    this.serverService.getdataServer().pipe(take(1)).subscribe((res:any)=>{
      this.dataServers = res;
      this.dataParcels = res.parcels;
      this.dataServer = this.fb.group({
        name: this.dataServers.name,
        shared: this.dataServers.shared,
        hasDisease: this.dataServers.hasDisease,
        initialMoney: this.dataServers.initialMoney,
        initialStatsPoints: this.dataServers.initialStatsPoints
      });
    })
  }
  saveUpdate(){
    console.log(this.dataServer.value);
    this.serverService.updateServer(this.dataServer.value).pipe(take(1)).subscribe((res)=>{
      console.log('servidor atualizado');

  })

  }

}
