import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-pick_drop_location',
  templateUrl: 'pick_drop_location.html'
})
export class Pick_drop_locationPage {

  constructor(public navCtrl: NavController) {

  }
    
  home(){
        this.navCtrl.setRoot(HomePage)
  }  

}
