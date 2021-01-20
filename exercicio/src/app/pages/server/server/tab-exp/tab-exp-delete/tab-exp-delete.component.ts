import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tab-exp-delete',
  templateUrl: './tab-exp-delete.component.html',
  styleUrls: ['./tab-exp-delete.component.sass']
})
export class TabExpDeleteComponent implements OnInit {



  constructor(private router:Router,
    private _location:Location) { }

  ngOnInit(): void {
  }
  onDelete(){
    this._location.back();
  }
  onCancel(){
    this._location.back();
  }

}
