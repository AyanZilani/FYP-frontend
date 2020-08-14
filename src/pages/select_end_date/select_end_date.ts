import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-select_end_date',
  templateUrl: 'select_end_date.html'
})
export class Select_end_datePage {
  public event = {
    timeStarts: '10:30',
  }
  trip: any = { endDate: 'YYYY-MM-DD HH:mm:ss' };
  constructor(public navCtrl: NavController, public alrt: AlertController, private http: HttpClient, private api: EbikeApiProvider) {

  }

  home() {
    console.log("Selecting End date ....", this.trip);
    this.api.selectEndDate(this.trip).subscribe(response => { console.log(response) }, error => { console.log(error);this.alertPopup("Error", "Please select the satrt and end time and date") })
    //this.api.getStartDate(this.trip)
    // this.http.post('http://localhost:3000/api/endDates', {
    //   endDate: this.trip.endDate,
    // }).subscribe(response => { console.log(response) }, error => { console.log(error) })

    this.navCtrl.setRoot(HomePage)
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
