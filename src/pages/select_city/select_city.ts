import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-select_city',
  templateUrl: 'select_city.html'
})
export class Select_cityPage {

  constructor(public navCtrl: NavController) {

  }
     
  pick_drop_location(){
        this.navCtrl.push(HomePage)
  }  

}
