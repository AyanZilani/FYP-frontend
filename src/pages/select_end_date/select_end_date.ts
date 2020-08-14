import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-select_end_date',
  templateUrl: 'select_end_date.html'
})
export class Select_end_datePage {
  public event = {
    timeStarts: '10:30',
  }
  trip: any = { endDate: 'YYYY-MM-DD HH:mm:ss' };
  constructor(public navCtrl: NavController, public alrt: AlertController, private api: EbikeApiProvider) { }

  home() {
    console.log("Selecting End date ....", this.trip);

    this.api.selectEndDate(this.trip)
      .subscribe(
        response => {
          console.log(response);
          this.navCtrl.setRoot(HomePage);
        },
        error => {
          console.log(error);
          this.alertPopup("Error", "Please select the satrt and end time and date")
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
}
