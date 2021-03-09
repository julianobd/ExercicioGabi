import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [NgbAlertConfig]
})
export class AlertComponent implements OnInit {
  @Input() public alertMessage:any;
  @Input() public typeAlert:any;
  showAlert:boolean = true;


  constructor(alertConfig: NgbAlertConfig) {
    if(this.typeAlert === 'succes'){
    alertConfig.type = 'success';
    alertConfig.dismissible = false;}
    else{
      alertConfig.type = 'danger';
      alertConfig.dismissible = false;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);

  }


}
