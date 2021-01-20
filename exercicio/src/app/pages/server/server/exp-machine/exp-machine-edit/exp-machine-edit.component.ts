
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExpMachineService } from '../../../../../shared/services/exp-machine.service'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-exp-machine-edit',
  templateUrl: './exp-machine-edit.component.html',
  styleUrls: ['./exp-machine-edit.component.sass']
})
export class ExpMachineEditComponent implements OnInit {
  expMach: FormGroup
  expMachId:any;
  dataexpMach:any;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private expMachineService: ExpMachineService
  ) {
    this.expMach = this.fb.group({
    description: '',
    expEachMinute: '',
    automaticStart: '',
    hourStart: '',
    hourEnds: '',
    enabled: ''
    })
   }

  ngOnInit(): void {
    this.expMachId = this.route.snapshot.paramMap.get('idMach');
    console.log(this.expMachId);
    this.expMachineService.listExpMach().pipe(take(1)).subscribe(res=>{
        this.dataexpMach = res;
      this.dataexpMach.forEach(element => {
        if(element.id === this.expMachId){
          this.expMach = this.fb.group(element);
        }
      })
    })
  }

  update(){
    this.expMachineService.updateMach(this.expMach.value).pipe(take(1)).subscribe(res=>{
      console.log('atualizado')
    })
  }

}
