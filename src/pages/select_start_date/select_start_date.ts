import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { Select_end_datePage } from '../select_end_date/select_end_date';
 import { HttpClient } from '@angular/common/http';
 //import { DatePipe } from '@angular/common';
@Component({
  selector: 'page-select_start_date',
  templateUrl: 'select_start_date.html'
})
export class Select_start_datePage {
  public event = {
   // timeStarts: '07:30',
  }

  trip: any = {startDate:''};
  constructor(public navCtrl: NavController, private http: HttpClient) {
    

  }
   
  select_end_date(){
    console.log("Selecting Start date ....", this.trip);
  this.http.post('http://localhost:3000/api/startDates',{
    startDate: this.trip.startDate,
      }).subscribe(response => {console.log(response)}, error => {console.log(error)})
        this.navCtrl.push(Select_end_datePage)
  }  


}
