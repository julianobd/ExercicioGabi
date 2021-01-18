import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ExpMachineService } from '../../../../shared/services/exp-machine.service'

@Component({
  selector: 'app-exp-machine',
  templateUrl: './exp-machine.component.html',
  styleUrls: ['./exp-machine.component.sass']
})
export class ExpMachineComponent implements OnInit {
  expMach:any;
  dataexpMach:any;
  constructor(
    private expMachineService: ExpMachineService
  ) { }

  ngOnInit(): void {
    this.expMachineService.listExpMach().pipe(take(1)).subscribe(res=>{
      this.dataexpMach = res;
      this.expMach = this.dataexpMach
    })
  }

}
