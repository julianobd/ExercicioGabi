
import { Component, OnInit } from '@angular/core';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { TokenService } from './../../../../shared/services/token.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tab-exp',
  templateUrl: './tab-exp.component.html',
  styleUrls: ['./tab-exp.component.sass']
})
export class TabExpComponent implements OnInit {
  tabExp:any;
  dataServer:any;
  experience:FormGroup;
  serverIdnumber:any;
  expId:any;


  constructor(
    private serverListService: ServerListService,
    private tokenService: TokenService,
    private router:Router,
    private fb: FormBuilder,
    private route:ActivatedRoute

    ) {
      this.experience = this.fb.group({
        level:'',
        exp:'',
        title:''
      })
    }

  ngOnInit(): void {
    this.serverListService. getdataServer().subscribe((res:any)=>
    {
      this.dataServer = res.expTable;
      console.log(this.dataServer);
      this.tabExp = this.dataServer
     }
    )
    this.serverIdnumber = this.route.snapshot.paramMap.get('id');
    console.log(this.serverIdnumber);

  }

    delete(i){

      this.tabExp.splice(i,1);
      console.log(this.tabExp);
      const id = "00000000-0000-0000-0000-000000000000";
    this.tabExp.forEach((x) => {
      x.id = id;
    });
      this.serverListService.addExp(this.tabExp).pipe(take(1))
      .subscribe((res) => {
        console.log('adicionado', res);
      });
    }
    addExp(){
      /*this.dataList.expTable.push({
        id: '00000000-0000-0000-0000-000000000000',
        level:this.experience.value.level,
        exp: this.experience.value.exp,
        title: this.experience.value.title,
      });*/
      this.tabExp.push({
        level:this.experience.value.level,
        exp: this.experience.value.exp,
        title: this.experience.value.title
      })
      console.log(this.tabExp);
    }
    saveExp():void{
      const id = "00000000-0000-0000-0000-000000000000";
      this.tabExp.forEach((x) => {
        x.id = id;
      });
        this.serverListService.addExp(this.tabExp).pipe(take(1))
        .subscribe((res) => {
          console.log('adicionado', res);
        });

        this.experience.reset({
          title: '',
          exp:'',
          level:''
        });
      }
      onedit(i){
        this.expId = this.tabExp[i].id;
        console.log(this.expId);
        //this.router.navigate(['server/',this.serverIdnumber,'tabExp','edit', this.expId]);
        this.router.navigate(['edit', this.expId], {relativeTo: this.route})

      }

}
