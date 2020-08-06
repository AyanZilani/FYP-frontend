import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api';
import { Book_carPage } from '../book_car/book_car';
import { FiltersPage } from '../filters/filters';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-car_list',
  templateUrl: 'car_list.html'
})
export class Car_listPage {

  bike = [];

  constructor(public navCtrl: NavController, private api: EbikeApiProvider) {
    this.bike = this.api.getFetchedData();
    console.log("Car_listPage :\n", this.bike);
  }


  book_car() {
    this.navCtrl.push(Book_carPage)
  }
  filters() {
    this.navCtrl.push(FiltersPage)
  }

}
