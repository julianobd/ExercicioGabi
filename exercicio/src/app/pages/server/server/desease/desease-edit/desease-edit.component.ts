import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DeseaseService } from './../../../../../shared/services/desease.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desease-edit',
  templateUrl: './desease-edit.component.html',
  styleUrls: ['./desease-edit.component.scss']
})
export class DeseaseEditComponent implements OnInit {
  desease:FormGroup;
  dataDesease:any;
  deseaseId:any;
  constructor(
    private fb:FormBuilder,
    private deseaseService:DeseaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.deseaseId = this.route.snapshot.paramMap.get('deseaseId')
    this.desease = this.fb.group({
      name: [null],
      damageEachTenMinutes: [null],
      durationInMinutes: [null],
      contagious: [null],
      hasVacine: [null],
      vacinePrice: [null],
    })
    this.deseaseService.getDesease().pipe(take(1)).subscribe((res:any)=>{
      console.log(res)
      this.dataDesease = res.availableDisease;
      this.dataDesease.forEach(element => {
        if(element.id === this.deseaseId){
          this.desease = this.fb.group(element)
        }
      })
    })
  }
  update(){
    this.deseaseService.updateDesease(this.desease.value).pipe(take(1)).subscribe(res=>{
      console.log('Atualizado')
    })
  }
}
