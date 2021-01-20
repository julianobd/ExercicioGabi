import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) {

   }

   getToken(){
     return this.tokenService.getToken();
   }
   getServerId(){
     return this.tokenService.getServerId();
   }
   getJobId(){
     return this.tokenService.getJobId();
   }

   getJobs(){
     return this.http.get(`https://hcs.dev4.com.br/api/Jobs/GetJobs/${this.getToken()}/${this.getServerId()}`)
   }

   createJob(dataJob){
     const jobs = {
      name: dataJob.name,
      color: dataJob.color,
      canHeal: dataJob.canHeal,
      canArrest: dataJob.canArrest,
      canDoMarriage: dataJob.canDoMarriage,
      isDefault: dataJob.isDefault,
      requirementXp: dataJob.requirementXp,
      publicJob: dataJob.publicJob
     }
     return this.http.post(`https://hcs.dev4.com.br/api/Jobs/AddJob/${this.getToken()}/${this.getServerId()}`, jobs)
   }

   updateJob(dataJob){
     return this.http.put(`https://hcs.dev4.com.br/api/Jobs/EditJob/${this.getToken()}/${this.getJobId()}`, dataJob)

   }

   deleteJob(dataDelete){
     return this.http.put(`https://hcs.dev4.com.br/api/Jobs/DeleteJob/${this.getToken()}/${this.getJobId()}`, dataDelete)
   }

}
