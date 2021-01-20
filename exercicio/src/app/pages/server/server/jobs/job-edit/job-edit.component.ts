import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from './../../../../../shared/services/jobs.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.sass']
})
export class JobEditComponent implements OnInit {
  jobs:FormGroup;
  dataJobs:any;
  jobId:any;
  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('jobId');

    this.jobs = this.fb.group({
      name:'',
      color:'',
      canHeal:'',
      canArrest:'',
      canDoMarriage:'',
      isDefault:'',
      requirementXp:'',

    })

    this.jobsService.getJobs().pipe(take(1)).subscribe((res:any)=>{
      this.dataJobs = res;

      this.dataJobs.forEach(element => {
        if(element.id === this.jobId){
          this.jobs = this.fb.group(element);
        }
      });

    })
  }
  update(){
    this.jobsService.updateJob(this.jobs.value).pipe(take(1)).subscribe(res=>{
      console.log('Atualizado')
  })
  }
}
