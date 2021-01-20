import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { JobsService } from './../../../../../shared/services/jobs.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.sass']
})
export class JobCreateComponent implements OnInit {
  jobs:FormGroup;
  serverId: any;
  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,

  ) {
    this.jobs = this.fb.group({
      name:'',
      color:'',
      canHeal:'',
      canArrest:'',
      canDoMarriage:'',
      isDefault:'',
      requirementXp:'',
      publicJob:''
    })
  }

  ngOnInit(): void {

  }

  save(){
    this.jobsService.createJob(this.jobs.value).pipe(take(1)).subscribe(res=>{
      console.log('Adicionado')
    })
  }

}
