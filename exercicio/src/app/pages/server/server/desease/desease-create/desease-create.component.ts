import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DeseaseService } from './../../../../../shared/services/desease.service';

@Component({
  selector: 'app-desease-create',
  templateUrl: './desease-create.component.html',
  styleUrls: ['./desease-create.component.scss']
})
export class DeseaseCreateComponent implements OnInit {
    desease:FormGroup
  constructor(
    private fb:FormBuilder,
    private deseaseService:DeseaseService,

    ) {
      this.desease = this.fb.group({
        name: '',
        damageEachTenMinutes: '',
        durationInMinutes: '',
        contagious: ''

      })
     }

  ngOnInit(): void {
  }

  save(){
    this.deseaseService.createDesease(this.desease.value).pipe(take(1)).subscribe(res=>{
      console.log('Adicionado')
    })
  }

}
