import {DecimalPipe} from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { UserDetailService } from './../../shared/services/user-detail.service';
import { User } from './../../core/navbar/models/users';
import { Observable } from 'rxjs';
import {NgbdSortableHeader, SortEvent} from '../../shared/directives/sortable.directive';

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

  //user:User[];
  //USERS: User[];
  //userId: any;



  constructor(
    public service:UserDetailService
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

  /* this.userservice.getUsers().pipe(take(1)).subscribe((res:any)=>{
      console.log(res);
      //this.users$ = res;
      this.USERS = res;

    })*/

  }
 /* userDelete(i){
    this.userId = this.users$[i].id;
    sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userDelete', this.userId], {relativeTo: this.route})
  }*/
 /* userEdit(i){
    this.userId = this.users$[i].id;
    sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userEdit', this.userId], {relativeTo: this.route})
  }
*/

}


