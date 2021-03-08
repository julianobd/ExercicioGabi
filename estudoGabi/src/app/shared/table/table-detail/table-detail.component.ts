import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TableColumn, TableAction } from '../table-model';



@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],

})

export class TableDetailComponent implements OnInit {

  @Input() tableTitle: string;
  @Input() columns: TableColumn[];
  @Input() columnsName;
  @Input() dataItems$:any[];
  @Input() actions: TableAction[];
  @Input() ITEMS:any;
  @Input() collectionSize;
  @Input() refreshData;
  @Output() action = new EventEmitter();
  @Output() create = new EventEmitter();

  page = 1;
  pages
  pageSize=2
  active = 0;
  searchText;
  name = 'Ngx-Scrollbar';



  constructor() {
    this.pages = Array(5).fill(0).map((x, i) => i);
    this.pages.pop()

  }

  p: number = 1;

  ngOnInit(): void {

  }
 currentPage (){
    return this.active;
  }



  onAction(action:TableAction, dataItem:any){
    this.action.emit({ action: action.eventName, dataItem:dataItem.id})
    console.log(action.eventName,dataItem)

  }

  onCreate(){
    this.create.emit('create')
  }


}
