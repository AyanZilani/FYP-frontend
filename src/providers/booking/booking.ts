import moment from "moment";
import { Booking } from '../../models/Booking/Booking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class BookingProvider {

    booking: Booking = new Booking(2, 1);

    bookURL = "http://10.216.97.220:3000/api/";

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
        return this.http.post(this.bookURL + 'bookings', {
            hours: this.booking.hours
        });
    }
}

