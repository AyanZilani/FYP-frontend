import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { HomePage } from '../home/home';
@Component({
  selector: 'page-select_end_date',
  templateUrl: 'select_end_date.html'
})
export class Select_end_datePage {
 public event = {
    timeStarts: '10:30',
  }
  constructor(public navCtrl: NavController) {

  }

  home(){
        this.navCtrl.setRoot(HomePage)
  }  

}
