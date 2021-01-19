import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeseaseService {

  constructor(
    private tokenService:TokenService,
    private http: HttpClient
  ) { }

  getToken(){
    return this.tokenService.getToken();
  }
  getServerId(){
    return this.tokenService.getServerId();
  }

  getDesease(){
      return this.http.get(`https://hcs.dev4.com.br/api/Disease/ListServerWithDiseases/${this.getToken()}/${this.getServerId()}`)
  }
  createDesease(dataDesease){
    const dataDes = {
      name: dataDesease.name,
        damageEachTenMinutes: dataDesease. damageEachTenMinutes,
        durationInMinutes: dataDesease.durationInMinutes,
        contagious: dataDesease.contagious,
        hasVacine: dataDesease.hasVacine,
        vacinePrice: dataDesease.vacinePrice
    }
      return this.http.post(`https://hcs.dev4.com.br/api/Disease/AddDiseaseToServer/${this.getToken()}/${this.getServerId()}`, dataDes)
  }

}
