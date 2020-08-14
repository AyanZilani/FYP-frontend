import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
//import { VerificationPage } from '../verification/verification';

import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sign_up',
  templateUrl: 'sign_up.html'
})
export class Sign_upPage {

  register: any = {username:'', email:'', password:''};
  constructor(public navCtrl: NavController, private http: HttpClient) {
    

  }
     
 verification(){
  console.log("Registering user ....", this.register);
  this.http.post('http://192.168.43.166:3000/api/Users',{
    username: this.register.username,
    email:this.register.email,
    //phone_number: this.register.user_phone_number,
    password:this.register.password
  }).subscribe(response => {console.log(response)}, error => {console.log(error)})
  this.navCtrl.push(HomePage);

  } 
 sign_up(){
  
 }
}
