import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../../shared/services/jobs.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs:any;
  jobId:any;
  dataJobs:any;
  constructor(
    private jobsService:JobsService,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.jobsService.getJobs().pipe(take(1)).subscribe(res=>{
      this.dataJobs = res;
      this.jobs = this.dataJobs
    })
  }
  jobEdit(i){
    this.jobId = this.jobs[i].id;
    console.log(this.jobId);
    sessionStorage.setItem('jobId', JSON.stringify(this.jobId));
    this.router.navigate(['jobEdit', this.jobId], {relativeTo: this.route})
  }
  jobDelete(i){
    this.jobId = this.jobs[i].id;
    console.log(this.jobId);
    sessionStorage.setItem('jobId', JSON.stringify(this.jobId));
    this.router.navigate(['jobDelete', this.jobId], {relativeTo:this.route})

  }

}
