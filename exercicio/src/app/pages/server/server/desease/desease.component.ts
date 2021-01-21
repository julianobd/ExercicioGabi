import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DeseaseService } from './../../../../shared/services/desease.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-desease',
  templateUrl: './desease.component.html',
  styleUrls: ['./desease.component.scss']
})
export class DeseaseComponent implements OnInit {
  desease:any;
  dataDesease:any;
  deseaseId:any;
  constructor(
    private deseaseService:DeseaseService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.deseaseService.getDesease().pipe(take(1)).subscribe((res:any)=>{
        this.dataDesease = res.availableDisease;
        this.desease = this.dataDesease;
      })
  }
  deseaseDelete(i){
    this.deseaseId = this.desease[i].id;
    sessionStorage.setItem('deseaseId', JSON.stringify(this.deseaseId));
    this.router.navigate(['deseaseDelete', this.deseaseId], {relativeTo: this.route})
  }
  deseaseEdit(i){
    this.deseaseId = this.desease[i].id;
    sessionStorage.setItem('deseaseId', JSON.stringify(this.deseaseId));
    this.router.navigate(['deseaseEdit', this.deseaseId], {relativeTo: this.route})
  }

}
