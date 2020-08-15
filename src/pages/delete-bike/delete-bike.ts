import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api'
import {AdminPage} from '../admin/admin'
/**
 * Generated class for the DeleteBikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-bike',
  templateUrl: 'delete-bike.html',
})
export class DeleteBikePage {
  del: any = { id:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: EbikeApiProvider, public alrt: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteBikePage');
  }
  del_bike(){
    console.log("del bikes ....", this.del);

    this.api.removeBike(this.del).subscribe(
      response => {
        console.log(response)
        this.alertPopup("Success", "You have deleted bike successfully!!!")
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
