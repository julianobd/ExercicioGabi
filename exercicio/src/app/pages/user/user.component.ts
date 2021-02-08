import { element } from 'protractor';
import { Validators } from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { UserDetailService } from './../../shared/services/user-detail.service';
import { UserService } from './../../shared/services/user.service';
import { User } from './../../core/navbar/models/users';
import { Observable } from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../shared/directives/sortable.directive';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserDetailService, DecimalPipe]
})



export class UserComponent {
  users$: Observable<User[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  //USERS: User[];
  userId: any;
  user:any;





  constructor(
    public service:UserDetailService,
    public userService:UserService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.users$ = service.users$;
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

/*  this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
      console.log(res);
      this.dataUser = res;

    })*/

  }
 /* userDelete(i){
    this.userId = this.users$[i].id;
    sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userDelete', this.userId], {relativeTo: this.route})
  }*/
 userEdit(name){
     this.userService.getUsers().subscribe((res:any)=>{
       this.user = res;
       console.log(name);
       this.user.forEach(element => {
         if(element.name == name){
           console.log(element.id);
           this.userId = element.id;
         }
       });
       sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userEdit', this.userId], {relativeTo: this.route})
     })

    /*this.userService.getUsers().subscribe((res:any)=>{
      this.user = res;
      console.log(this.user[i].id)
      this.userId = this.user[i].id;
      sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userEdit', this.userId], {relativeTo: this.route})
  })*/
  }



}


