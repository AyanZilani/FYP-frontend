import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Sign_upPage } from '../sign_up/sign_up';
import { HomePage } from '../home/home';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-sign_in',
  templateUrl: 'sign_in.html'
})
export class Sign_inPage {

  login: any = { user_email: '', user_password: '' };

  constructor(public navCtrl: NavController, private http: HttpClient, public alrt: AlertController, private api: EbikeApiProvider) { }

  sign_up() {
    this.navCtrl.push(Sign_upPage)
  }
  home() {
    this.navCtrl.setRoot(HomePage)
  }

  sign_in() {
    console.log("Signing in ....", this.login);
    this.api.signIn(this.login)
      .subscribe(
        response => {
          console.log(response);
          this.navCtrl.push(HomePage)
        },
        error => {
          console.log(error); this.alertPopup("Alert", "Login Failed")
        })

    // this.http.post('http://192.168.1.25:3000/api/Users/login', {
    //   email: this.login.user_email,
    //   password: this.login.user_password
    // }).subscribe(response => { this.navCtrl.push(HomePage) }, error => { console.log(error); this.alertPopup("Alert", "Login Failed") })
    //this.navCtrl.push(HomePage);
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
