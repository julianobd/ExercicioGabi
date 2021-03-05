import { Component, OnInit } from '@angular/core';
import {  map, take } from 'rxjs/operators';
import { Jobs } from '../../core/model/jobs';
import { JobsService } from '../../core/services/jobs.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  currentTitle = 'Jobs'
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  },
  {
   iconClass:'./../../../assets/img/delete 3.png',
   eventName:'deletar'
  }]

  dataColumn = [{
    columnName:'name',
    displayName:'Nome'
  },
  {
    columnName:'color',
    displayName:'Cor'
  },
  {
    columnName:'canHeal',
    displayName:'Pode Curar'
  },
  {
    columnName:'canArrest',
    displayName:'Pode prender'
  },
  {
    columnName:'canDoMarriage',
    displayName:'Pode casar'
  },
  {
    columnName:'requirementXp',
    displayName:'XP Necessário'
  }
]
dataId:string;
dataItems:Observable<Jobs[]>;
ITEMS:Jobs[];


  /*jobs:any;
  jobId:any;
  dataJobs:any;*/
  constructor(
    private jobsService:JobsService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataItems = this.jobsService.getJobs().pipe(take(1),map((x:any)=>x))
    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res;
      console.log("Estes são os jobs:", this.ITEMS);
    })
  }

  action(dataEvent){
    if(dataEvent.action=='editar'){
      console.log('rota de edição')
      this.router.navigate(['jobsEdit'], { relativeTo: this.route })
    }else{
      console.log('rota para deletar')
      this.router.navigate(['jobsDelete'], { relativeTo: this.route })
    }
  }
  create(dataCreate){
    console.log(dataCreate);
    this.router.navigate(['jobsCreate'], { relativeTo: this.route })
  }


 /* jobEdit(i){
    this.jobId = this.jobs[i].id;
    console.log(this.jobId);
    this.router.navigate(['jobEdit', this.jobId], {relativeTo: this.route})
  }
  jobDelete(i){
    this.jobId = this.jobs[i].id;
    console.log(this.jobId);
    this.router.navigate(['jobDelete', this.jobId], {relativeTo:this.route})

  }
*/
}
