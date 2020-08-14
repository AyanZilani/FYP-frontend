import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Sign_upPage } from '../sign_up/sign_up';
import { HomePage } from '../home/home';
import { CookiesProvider } from '../../providers/cookies/cookies';
import { AdminPage } from '../admin/admin';


interface User {
  id: string
  ttl: number
  created: Date
  userId: number
}

@Component({
  selector: 'page-sign_in',
  templateUrl: 'sign_in.html'
})
export class Sign_inPage {

  login: any = { user_email: '', user_password: '' };


  constructor(public navCtrl: NavController, public alrt: AlertController, private api: EbikeApiProvider, private cookies: CookiesProvider) { }

  sign_up() {
    this.navCtrl.push(Sign_upPage)
  }

  sign_in() {
    console.log("sign_in > Signing in : this.login:\n", JSON.stringify(this.login));
    this.api.signIn(this.login)
      .subscribe(
        response => {
          console.log(JSON.stringify(response));
          const user: User = <User>response;

          this.cookies.setAccessToken(user.id);
          this.cookies.setEmail(this.login.user_email);

          if (this.cookies.isManager()) {
            this.navCtrl.push(AdminPage);
            return;
          }
          this.navCtrl.push(HomePage)
        },
        error => {
          console.log(JSON.stringify(error));
          console.log(error); this.alertPopup("Alert", "Login Failed")
        })
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
