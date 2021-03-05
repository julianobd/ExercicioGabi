import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../core/services/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../../core/services/jobs.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serverId:any;
  avbItems:number;
  jobs:number;
  statsInitialpoint:number;
  shared:boolean;
  InitialMoney:number;
  hasDisease:boolean;
  users:number;
  constructor(
    private serverService: ServerService,
    private router:Router,
    private route: ActivatedRoute,
    private jobsService:JobsService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.serverId = this.route.snapshot.paramMap.get('id');
    this.serverService.getdataServer().subscribe((res:any)=>{
      this.avbItems = res.availableItems.length;
      this.InitialMoney = res.initialMoney;
      this.statsInitialpoint = res.initialStatsPoints;
      this.shared = res.shared;
      this.hasDisease = res.hasDisease;

    })
    this.jobsService.getJobs().subscribe((res:any)=>{
      console.log(res)
      this.jobs = res.length;
    })
    this.userService.getUsers().subscribe((res:any)=>{
      console.log(res.length);
      this.user = res.length;
    })

  }
  user(){
    this.router.navigate(['/user'])
  }

}
