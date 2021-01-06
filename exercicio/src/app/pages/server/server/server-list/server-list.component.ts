import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServerListService } from '../../../../shared/services/server-list.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.sass']
})
export class ServerListComponent implements OnInit {
  datalistServer:any;
  dataList:any;
  showdataServ:boolean = false;
  tabExp:any;
  experience:FormGroup;
  constructor(private serverListService: ServerListService,private router:Router, private fb: FormBuilder) {
    this.experience = this.fb.group({
      level:'',
      exp:'',
      title:''
    })
   }

  ngOnInit(): void {
  }

  listServer(){
    this.showdataServ = false;
    this.serverListService.getServerList().subscribe((res:any)=>
    {
      this.datalistServer = res;
     }

    )}
    showServer(i){
    this.showdataServ = true;
    //console.log(this.datalistServer[i].name)
    this.dataList = this.datalistServer[i];
    //console.log(this.datalistServer[i].id)
    this.tabExp = this.dataList.expTable;
    sessionStorage.setItem('server', JSON.stringify(this.datalistServer[i]));
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



      }
  }
