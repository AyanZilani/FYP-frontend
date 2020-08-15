import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddBikePage} from '../add-bike/add-bike';
import {ReportPage} from '../report/report';
import {DeleteBikePage} from '../delete-bike/delete-bike'
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  add_bike() {
    this.navCtrl.push(AddBikePage)
  }
  delete_bike() {
    this.navCtrl.push(DeleteBikePage)
  }
  viewReport() {
    this.navCtrl.push(ReportPage)
  }

}
