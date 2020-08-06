import moment from "moment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EbikeApiProvider {

    baseURL = "http://192.168.1.25:3000/api/";

    constructor(public http: HttpClient) {
        console.log('EbikeApiProvider initiated!');

    }

    signIn(login) {
        console.log("Signing in ....", login);
        return this.http.post(this.baseURL + 'Users/login', {
            email: login.user_email,
            password: login.user_password
        });
    };

    selectStartDate(trip) {
        return this.http.post(this.baseURL + 'startDates', {
            startDate: moment(trip.startDate),
        });
    }
}
