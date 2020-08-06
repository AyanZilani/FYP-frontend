import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { Select_cityPage } from '../select_city/select_city';
 import { Select_start_datePage } from '../select_start_date/select_start_date';
 import { Select_end_datePage } from '../select_end_date/select_end_date';
 import { Car_listPage } from '../car_list/car_list';
 import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  public event = {
//    startTip: '2019-06-15',
//    endTrip: '2019-06-18'
//  }


  constructor(public navCtrl: NavController, private http: HttpClient) {
    

  }
    
  select_city(){
        this.navCtrl.push(Select_cityPage)
  }  
  select_start_date(){
      this.navCtrl.push(Select_start_datePage)
  } 
  select_end_date(){
        this.navCtrl.push(Select_end_datePage)
  } 
  car_list(){
        this.navCtrl.push(Car_listPage)
  } 

}
