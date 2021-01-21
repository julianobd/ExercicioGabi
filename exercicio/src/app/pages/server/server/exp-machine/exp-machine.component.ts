import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ExpMachineService } from '../../../../shared/services/exp-machine.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exp-machine',
  templateUrl: './exp-machine.component.html',
  styleUrls: ['./exp-machine.component.scss']
})
export class ExpMachineComponent implements OnInit {
  expMach:any;
  dataexpMach:any;
  machineId:any;
  constructor(
    private expMachineService: ExpMachineService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.expMachineService.listExpMach().pipe(take(1)).subscribe(res=>{
      this.dataexpMach = res;
      this.expMach = this.dataexpMach
    })
  }
  editMach(i){
    this.machineId = this.expMach[i].id;
    console.log(this.machineId)
    sessionStorage.setItem('machine', JSON.stringify(this.machineId));
    this.router.navigate(['expMachEdit', this.machineId], {relativeTo:this.route} )
  }

}
