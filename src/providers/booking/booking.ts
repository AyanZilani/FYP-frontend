import moment from "moment";
import { Booking } from '../../models/Booking/Booking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class BookingProvider {

    booking: Booking = new Booking(2, 1);

    baseURL = "http://192.168.1.21:3000/api/";

    constructor(public http: HttpClient) {
        console.log('------------BookingProvider initiated!---------------');
    }

    getCurrentBooking() {
        return this.booking;
    }

    setStartDate(date: Date) {
        this.booking.startDate = date;
    }

    submitBooking() {
        return this.http.post(this.baseURL + 'bookings', {
            hours: this.booking.hours
        });
    }
}

