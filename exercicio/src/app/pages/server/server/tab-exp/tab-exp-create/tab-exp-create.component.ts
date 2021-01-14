import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab-exp-create',
  templateUrl: './tab-exp-create.component.html',
  styleUrls: ['./tab-exp-create.component.sass']
})
export class TabExpCreateComponent implements OnInit {
  experience: FormGroup;
  tabExp: any;
  expTable:any;
  constructor(
    private fb: FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.experience = this.fb.group({
      title: '',
      level:'',
      exp:''
    })
   }

  ngOnInit(): void {
    this.serverListService. getdataServer().subscribe((res:any)=>
    {
      this.expTable= res.expTable;
      console.log(this.expTable);
      this.tabExp = this.expTable;
     })
  }
  addExp(){
    this.expTable.push({
      level:this.experience.value.level,
      exp: this.experience.value.exp,
      title: this.experience.value.title
    })
    console.log(this.expTable)
    this.experience.reset({
      title: '',
      exp:'',
      level:''
    });



  }
  saveExp(){
    return this.serverListService.addExp(this.expTable).pipe(take(1)).subscribe(res=>{
      console.log(res);

    })
  }
  /*
  delete(i){
    this.tabExp.splice(i,1);
    console.log(this.tabExp);
    const id = "00000000-0000-0000-0000-000000000000";
  this.tabExp.forEach((x) => {
    x.id = id;
  });
    this.serverListService.addExp(this.tabExp).pipe(take(1))
    .subscribe((res) => {
      console.log('excluído', res);
    });
  }*/
}
