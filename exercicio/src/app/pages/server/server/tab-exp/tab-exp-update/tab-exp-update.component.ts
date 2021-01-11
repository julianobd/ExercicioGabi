import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tab-exp-update',
  templateUrl: './tab-exp-update.component.html',
  styleUrls: ['./tab-exp-update.component.sass']
})
export class TabExpUpdateComponent implements OnInit {
  serverexpId:any;
  serverId:any;
  experience:FormGroup;
  tabExp:any[];


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fb: FormBuilder,
    private serverListService: ServerListService
  ) { }

  ngOnInit(): void {
    this.experience = this.fb.group({
      level:[null],
      exp:[null],
      title:[null]
    })

    this.serverexpId = this.route.snapshot.paramMap.get('expId');
    this.serverId = this.route.snapshot.paramMap.get('id');
    this.serverListService.getdataServer().pipe(take(1)).subscribe((res:any)=>{
      this.tabExp = res.expTable;
      res.expTable.forEach(exp => {
        if(exp.id === this.serverexpId){
          this.experience = this.fb.group(exp);
          console.log(this.experience.value);
        }
      });
    })
  }

  update(){
    const id = "00000000-0000-0000-0000-000000000000";
    Object.assign(this.tabExp[this.tabExp.findIndex(el =>
      el.id === this.experience.value.id
    )], this.experience.value);

    this.tabExp.forEach(x => {
      x.id = id;

    });
    console.log(this.tabExp);
    this.serverListService.updateExp(this.tabExp).pipe(take(1)).subscribe((res)=>{
        console.log('tabela de exp atualizada');
        this.router.navigate(['/server/', this.serverId, 'tabExp' ]
        )

    })
    }

}
