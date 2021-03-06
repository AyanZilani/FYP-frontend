import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api'
import {AdminPage} from '../admin/admin'
/**
 * Generated class for the AddBikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-bike',
  templateUrl: 'add-bike.html',
})
export class AddBikePage {
  add: any = { bike_number:'', bike_status:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: EbikeApiProvider, public alrt: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBikePage');
  }

  addition(){
    console.log("Adding bikes ....", this.add);

    this.api.addBike(this.add).subscribe(
      response => {
        console.log(response)
        this.alertPopup("Success", "You have added bike successfully!!!")
      },
      error => {
        console.log(error);
        this.alertPopup("Failed", "Please fill up all the fields and then try again!!!")
      }
    );

    

  }
  alertPopup(title: string, Msg: string) {
    let alrt = this.alrt.create({
      title: title,
      subTitle: Msg,
      buttons: ['OK']
    });
    alrt.present();
  }
  backAdmin(){
    this.navCtrl.push(AdminPage);
  }

}
