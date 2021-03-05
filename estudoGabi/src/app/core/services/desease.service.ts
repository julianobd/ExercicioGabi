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
updateDesease(dataEditDesease,deseaseId){
  const dataEditDes = {
    name: dataEditDesease.name,
    damageEachTenMinutes: dataEditDesease.damageEachTenMinutes,
    durationInMinutes: dataEditDesease.durationInMinutes,
    contagious: dataEditDesease.contagious,
    serverId: this.getServerId()
  }
  return this.http.put(`https://hcs.dev4.com.br/api/Disease/EditDiseaseFromServer/${this.getToken()}/deseaseId`,dataEditDes)
}
deleteDesease(deseaseId){
  return this.http.delete(`https://hcs.dev4.com.br/api/Disease/RemoveDiseaseFromServer/${this.getToken()}/${this.getServerId()}/deseaseId`)
}
}
