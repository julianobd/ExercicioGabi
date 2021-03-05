import { ItemsCreateComponent } from './../items/components/items-create/items-create.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/model/users';
import { Observable } from 'rxjs';

import { take, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  currentTitle = 'Usuários'
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  },
  {
   iconClass:'./../../../assets/img/delete 3.png',
   eventName:'deletar'
  }]
  dataColumn = [{
    columnName:'email',
    displayName:'Email'
  },
  {
    columnName:'permission',
    displayName:'Permissão'
  }
]
  dataId:string;
  dataItems:Observable<User[]>;
  ITEMS:User[];


  /*users$: Observable<User[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  userId: any;
  user:any;*/

  constructor(
    public userService:UserService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    /*this.users$ = service.users$;
    this.total$ = service.total$;
  }
  onSort({column, direction}: SortEvent) {

   // resetting other headers
   this.headers.forEach(header => {
     if (header.sortable !== column) {
       header.direction = '';
     }
   });

   this.service.sortColumn = column;
   this.service.sortDirection = direction;
 }

 ngOnInit(): void {
   this.service.getUser();
   this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
     this.user = res;
    })
/*  this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
     console.log(res);
     this.dataUser = res;

   })*/

 }
/*userDelete(name){

 this.user.forEach(element => {
   if(element.name == name){
     console.log(element.id);
     this.userId = element.id;
   }
 });
   sessionStorage.setItem('userid', JSON.stringify(this.userId));
   this.router.navigate(['userDelete', this.userId], {relativeTo: this.route})
 }
userEdit(name){
      console.log(name);
      this.user.forEach(element => {
        if(element.name == name){
          console.log(element.id);
          this.userId = element.id;
        }
      });
      sessionStorage.setItem('userid', JSON.stringify(this.userId));
   this.router.navigate(['userEdit', this.userId], {relativeTo: this.route})

 }


*/
ngOnInit(): void {
  this.dataItems = this.userService.getUsers()
  .pipe(take(1),map((x:any)=>x))

  this.dataItems.subscribe((res:any)=>{
    this.ITEMS = res;
    console.log("ESTES SÃO OS ITEMS:",this.ITEMS);

  })
}

action(dataEvent){
  if(dataEvent.action=='editar'){
    console.log('rota de edição')
    this.router.navigate(['userEdit', dataEvent.dataItem], { relativeTo: this.route })
  }else{
    console.log('rota para deletar')
    this.router.navigate(['userDelete', dataEvent.dataItem], { relativeTo: this.route })
  }
}
create(dataCreate){
  console.log(dataCreate);
  this.router.navigate(['userCreate'], { relativeTo: this.route })
}

}



