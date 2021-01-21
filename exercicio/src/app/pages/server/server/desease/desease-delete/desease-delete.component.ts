import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DeseaseService } from './../../../../../shared/services/desease.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desease-delete',
  templateUrl: './desease-delete.component.html',
  styleUrls: ['./desease-delete.component.scss']
})
export class DeseaseDeleteComponent implements OnInit {
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
  delete(){
      this.deseaseService.deleteDesease().pipe(take(1)).subscribe(res=>
        {
          console.log('excluído')
        })
  }

}
