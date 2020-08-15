import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'
//import { VerificationPage } from '../verification/verification';

import { HttpClient } from '@angular/common/http';
import { Sign_inPage } from '../sign_in/sign_in';

@Component({
  selector: 'page-sign_up',
  templateUrl: 'sign_up.html'
})
export class Sign_upPage {

  register: any = {username:'', email:'', password:''};
  constructor(public navCtrl: NavController, private http: HttpClient, public alrt: AlertController) {
    

  }
     
 verification(){
  console.log("Registering user ....", this.register);
  this.http.post('http://192.168.43.166:3000/api/Users',{
    username: this.register.username,
    email:this.register.email,
    //phone_number: this.register.user_phone_number,
    password:this.register.password
    
  }).subscribe(response => {console.log(response)
    this.navCtrl.push(Sign_inPage)
    }, error => {console.log(error),this.alertPopup("Error!!!", "Please fill up all the required fields.")})
 // this.navCtrl.push(HomePage);

  } 
  alertPopup(title: string, Msg: string) {
    let alrt = this.alrt.create({
      title: title,
      subTitle: Msg,
      buttons: ['OK']
    });
    alrt.present();
  }
 sign_up(){
  
 }
}
