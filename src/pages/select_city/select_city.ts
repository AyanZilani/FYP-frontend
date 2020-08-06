import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pick_drop_locationPage } from '../pick_drop_location/pick_drop_location';
@Component({
  selector: 'page-select_city',
  templateUrl: 'select_city.html'
})
export class Select_cityPage {

  constructor(public navCtrl: NavController) {

  }
     
  pick_drop_location(){
        this.navCtrl.push(Pick_drop_locationPage)
  }  

}
