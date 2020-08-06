import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Doc_verifiedPage } from '../doc_verified/doc_verified';
@Component({
  selector: 'page-doc_verificatino',
  templateUrl: 'doc_verificatino.html'
})
export class Doc_verificatinoPage {

  constructor(public navCtrl: NavController) {

  }
   
  doc_verified(){
        this.navCtrl.push(Doc_verifiedPage)
  }  


}
