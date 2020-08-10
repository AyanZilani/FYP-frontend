export class Booking {
    hours: number;
    bikeId: number;
    startDate: Date;

    constructor(hours: number, bid: number) {
        this.hours = hours;
        this.bikeId = bid;
    }

    getHours() {
        return this.hours;
    }
}