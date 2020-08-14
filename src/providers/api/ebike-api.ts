import moment from "moment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookiesProvider } from "../cookies/cookies";


@Injectable()
export class EbikeApiProvider {

    bike: any = { bike_number: '', bike_status: '' };

    baseURL;

    constructor(public http: HttpClient, public cookies: CookiesProvider) {
        this.baseURL = cookies.getBaseUrl();
    }

    signIn(login) {
        console.log(`Signing in ${this.baseURL}Users/login ....`, JSON.stringify(login));
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

    selectEndDate(trip) {
        return this.http.post(this.baseURL + 'endDates', {
            endDate: trip.endDate
        })
    }

    getAvailableBikes(done: Function) {

        let filter = {
            where: {
                bike_status: 'available'
            }
        }
        this.http.get(this.baseURL + 'bikes?filter=' + JSON.stringify(filter))
            .subscribe(
                (response) => {
                    this.bike = response;
                    console.log(this.bike);
                    done();
                },
                error => {
                    console.log(error)
                }
            )
    }

    getFetchedData() {
        return this.bike;
    }

    getStartDate(trip) {


        this.http.get(this.baseURL + this.baseURL + 'startDates')
            .subscribe(
                (response) => {
                    console.log('got dates');

                },
                error => {
                    console.log(error)
                }
            )
    }

}
