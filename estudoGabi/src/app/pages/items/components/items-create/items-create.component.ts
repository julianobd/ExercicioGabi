import { ItemsService } from './../../../../core/services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../../core/services/user.service';

@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.scss']
})
export class ItemsCreateComponent implements OnInit {
  item:FormGroup;
  closeResult: string;
  constructor(
    private fb:FormBuilder,
    private itemsService:ItemsService,
    private modalService: NgbModal,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.item = this.fb.group({
      name:'',
      health:'',
      vest:'',
      experience:'',
      hungry:'',
      money:'',
      statusPoint:'',
      isInitial:'',
      isVirtual:''
    })
  }

  ngOnInit(): void {
  }

  save(){
    this.itemsService.createItem(this.item.value).pipe(take(1)).subscribe(res=>{
      console.log(res)
    })


  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  back(): void {
    this.router.navigate(['app-container/items'])}
}
