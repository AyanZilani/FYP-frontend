webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_bookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_bookingsPage = /** @class */ (function () {
    function My_bookingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    My_bookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_bookings',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\my_bookings\my_bookings.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'my_bookings\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="container">\n        <ion-list no-lines no-margin>\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 3</h2>\n                        <h5>Booking ID CZ22140</h5>\n                        <p class="d-flex">\n                            <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                            Campus Bike UTM, Faculty Alam Bina parking\n                        </p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 3.jpg">\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>{{\'trip_start\' | translate}}</h5>\n                        <p>Sat, 15 June, 5:30 pm</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <h5>{{\'trip_end\' | translate}}</h5>\n                        <p>Tue, 18 June, 10:30 pm</p>\n                    </ion-col>\n                    <ion-col col-4 class="payment_type">\n                        <h5>{{\'paid_via\' | translate}} Credit Card</h5>\n                        <p>Rm30.00</p>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n            \n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 3</h2>\n                        <h5>Booking ID CZ22140</h5>\n                        <p class="d-flex">\n                            <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                            Campus Bike UTM, Faculty Alam Bina parking\n                        </p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 5.jpg">\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <h5>{{\'trip_start\' | translate}}</h5>\n                        <p>Sat, 15 June, 5:30 pm</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <h5>{{\'trip_end\' | translate}}</h5>\n                        <p>Tue, 18 June, 10:30 pm</p>\n                    </ion-col>\n                    <ion-col col-4 class="payment_type">\n                        <h5>{{\'paid_via\' | translate}} Credit Card</h5>\n                        <p>Rm30.00</p>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\my_bookings\my_bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], My_bookingsPage);
    return My_bookingsPage;
}());

//# sourceMappingURL=my_bookings.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbikeApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EbikeApiProvider = /** @class */ (function () {
    function EbikeApiProvider(http) {
        this.http = http;
        this.bike = { bike_number: '', bike_status: '' };
        this.baseURL = "http://192.168.1.25:3000/api/";
        console.log('EbikeApiProvider initiated!');
    }
    EbikeApiProvider.prototype.signIn = function (login) {
        console.log("Signing in ....", login);
        return this.http.post(this.baseURL + 'Users/login', {
            email: login.user_email,
            password: login.user_password
        });
    };
    ;
    EbikeApiProvider.prototype.selectStartDate = function (trip) {
        return this.http.post(this.baseURL + 'startDates', {
            startDate: __WEBPACK_IMPORTED_MODULE_0_moment___default()(trip.startDate),
        });
    };
    EbikeApiProvider.prototype.selectEndDate = function (trip) {
        return this.http.post(this.baseURL + 'endDates', {
            endDate: trip.endDate
        });
    };
    EbikeApiProvider.prototype.getAvailableBikes = function (done) {
        var _this = this;
        var filter = {
            where: {
                bike_status: 'available'
            }
        };
        this.http.get(this.baseURL + 'bikes?filter=' + JSON.stringify(filter))
            .subscribe(function (response) {
            _this.bike = response;
            console.log(_this.bike);
            done();
        }, function (error) {
            console.log(error);
        });
    };
    EbikeApiProvider.prototype.getFetchedData = function () {
        return this.bike;
    };
    EbikeApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], EbikeApiProvider);
    return EbikeApiProvider;
    var _a;
}());

//# sourceMappingURL=ebike-api.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select_end_datePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Select_end_datePage = /** @class */ (function () {
    function Select_end_datePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.event = {
            timeStarts: '10:30',
        };
        this.trip = { endDate: 'YYYY-MM-DD HH:mm:ss' };
    }
    Select_end_datePage.prototype.home = function () {
        console.log("Selecting End date ....", this.trip);
        this.http.post('http://localhost:3000/api/endDates', {
            endDate: this.trip.endDate,
        }).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Select_end_datePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select_end_date',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_end_date\select_end_date.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'select_end_date\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="calendar_box">\n        <ion-calendar #calendar lang="en"></ion-calendar>\n    </div>\n\n    <div class="select_date">\n        <h2>{{\'select_trip_end_time\' | translate}}</h2>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="YYYY-MM-DD HH:mm:ss" [(ngModel)]="trip.endDate"></ion-datetime>\n        <h3>{{\'tab_to_select\' | translate}}</h3>\n    </div>\n</ion-content>\n<ion-footer no-border>\n   <button ion-button  no-margin full class="btn" (click)="home()">{{\'continue\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_end_date\select_end_date.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], Select_end_datePage);
    return Select_end_datePage;
}());

//# sourceMappingURL=select_end_date.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_city_select_city__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_start_date_select_start_date__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_end_date_select_end_date__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__car_list_car_list__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Observable } from 'rxjs/Observable';
var HomePage = /** @class */ (function () {
    //  public event = {
    //    startTip: '2019-06-15',
    //    endTrip: '2019-06-18'
    //  }
    // bike: any = { bike_number: '', bike_status: '' };
    function HomePage(navCtrl, http, api) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.api = api;
    }
    HomePage.prototype.select_city = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_city_select_city__["a" /* Select_cityPage */]);
    };
    HomePage.prototype.select_start_date = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__select_start_date_select_start_date__["a" /* Select_start_datePage */]);
    };
    HomePage.prototype.select_end_date = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__select_end_date_select_end_date__["a" /* Select_end_datePage */]);
    };
    HomePage.prototype.car_list = function () {
        // console.log("Getting list of bikes ....", this.bike);
        var _this = this;
        this.api.getAvailableBikes(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__car_list_car_list__["a" /* Car_listPage */]);
        });
        // let data: Observable<any>;
        // data = this.http.get('http://localhost:3000/api/bikes'),
        //   data.subscribe(response => {
        //     console.log(response),
        //       this.bike = response;
        //   }, error => { console.log(error) })
        // this.navCtrl.push(Car_listPage)
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\home\home.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{\'app_title1\' | translate}}<span>{{\'app_title2\' | translate}}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="banner">\n            <p>{{\'banner_text1\' | translate}}<br>{{\'banner_text2\' | translate}}<br>{{\'banner_text3\' | translate}}</p>\n        </div>\n\n        <ion-list no-lines>\n            <ion-item (click)="select_city()">\n                <h3>{{\'Location\' | translate}}</h3>\n                <h2 class="d-flex">\n                    <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                    Campus Bike UTM, Faculty ALam Bina parking\n                </h2>\n            </ion-item>  \n\n            <ion-item (click)="select_start_date()">\n                <h3>{{\'start_trip\' | translate}}</h3>\n                <h2 class="d-flex">\n                    <ion-icon class="zmdi zmdi-calendar-alt"></ion-icon>\n                    15 Jun, 2019 5:30 pm\n                </h2>\n            </ion-item>\n\n            <ion-item (click)="select_end_date()">\n                <h3>{{\'end_trip\' | translate}}</h3>\n                <h2 class="d-flex">\n                    <ion-icon class="zmdi zmdi-calendar-alt"></ion-icon>\n                    18 Jun, 2019 10:30 pm\n                </h2>\n            </ion-item>\n            <button ion-button block icon-start class="btn" (click)="car_list()">{{\'search_cars\' | translate}}</button>\n        </ion-list>\n    </div>\n\n   <!---- <div class="latest_offer">\n        <h2>{{\'latest_offer\' | translate}}</h2>\n        <ion-scroll scrollX="true">\n            <div class="item_scroll">\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/1.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>20% off</h2>\n                    <h3>With HDXC Bank</h3>\n                </div>\n            </div>\n            <div class="item_scroll" text-end>\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/2.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>50%</h2>\n                    <h3>Cashback</h3>\n                    <p>On frist booking</p>\n                </div>\n            </div>\n            <div class="item_scroll">\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/1.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>20% off</h2>\n                    <h3>With HDXC Bank</h3>\n                </div>\n            </div>\n            <div class="item_scroll" text-end>\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/2.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>50%</h2>\n                    <h3>Cashback</h3>\n                    <p>On frist booking</p>\n                </div>\n            </div>\n            <div class="item_scroll">\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/1.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>20% off</h2>\n                    <h3>With HDXC Bank</h3>\n                </div>\n            </div>\n            <div class="item_scroll" text-end>\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/2.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>50%</h2>\n                    <h3>Cashback</h3>\n                    <p>On frist booking</p>\n                </div>\n            </div>\n            <div class="item_scroll">\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/1.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>20% off</h2>\n                    <h3>With HDXC Bank</h3>\n                </div>\n            </div>\n            <div class="item_scroll" text-end>\n                <div class="item_bg center_img">\n                    <img src="assets/imgs/2.jpg" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <h2>50%</h2>\n                    <h3>Cashback</h3>\n                    <p>On frist booking</p>\n                </div>\n            </div>\n        </ion-scroll>\n    </div> -->\n</ion-content>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_profilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_profilePage = /** @class */ (function () {
    function My_profilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.select_gender = "male";
    }
    My_profilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_profile',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\my_profile\my_profile.html"*/'<ion-header>\n    <ion-navbar>\n           <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'my_profile\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n    <div class="form">\n        <div class="profile_img">\n            <div class="img_box center_img">\n                <img src="assets/imgs/profile_pic.png" class="crop_img">\n            </div>\n            <ion-icon class="zmdi zmdi-camera"></ion-icon>\n        </div>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'enter_full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" value="samsmith@mail.com"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label class="d-flex">{{\'select_gender\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_gender">\n                    <ion-option value="male">Male</ion-option>\n                    <ion-option value="female">Female</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n    </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button  no-margin full class="btn">{{\'update_profile\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\my_profile\my_profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], My_profilePage);
    return My_profilePage;
}());

//# sourceMappingURL=my_profile.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select_cityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_drop_location_pick_drop_location__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Select_cityPage = /** @class */ (function () {
    function Select_cityPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Select_cityPage.prototype.pick_drop_location = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pick_drop_location_pick_drop_location__["a" /* Pick_drop_locationPage */]);
    };
    Select_cityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select_city',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_city\select_city.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'select_city\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <ion-list no-lines radio-group>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>New York</ion-label>\n                        <ion-radio checked="true" value="1" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Washington</ion-label>\n                        <ion-radio value="2" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Greenville</ion-label>\n                        <ion-radio value="3" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Bristol</ion-label>\n                        <ion-radio value="4" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Clinton</ion-label>\n                        <ion-radio value="5" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Fairview</ion-label>\n                        <ion-radio value="6" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Madison</ion-label>\n                        <ion-radio  value="7" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>San Antonio</ion-label>\n                        <ion-radio value="8" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Columbus</ion-label>\n                        <ion-radio value="9" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Columbus</ion-label>\n                        <ion-radio value="10" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Los Angeles</ion-label>\n                        <ion-radio value="11" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>San Francisco</ion-label>\n                        <ion-radio value="12" item-start></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n   <button ion-button  no-margin full class="btn" (click)="pick_drop_location()">{{\'continue\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_city\select_city.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Select_cityPage);
    return Select_cityPage;
}());

//# sourceMappingURL=select_city.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pick_drop_locationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pick_drop_locationPage = /** @class */ (function () {
    function Pick_drop_locationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Pick_drop_locationPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Pick_drop_locationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick_drop_location',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\pick_drop_location\pick_drop_location.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'select_pick_drop_location\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <ion-list no-lines radio-group>\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    Old city church, Manhattan, New York\n                </ion-label>\n                <ion-radio checked="true" value="1" item-start></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    World trade park, Manhattan, New York\n                </ion-label>\n                <ion-radio  value="2" item-start></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    Adele palace, Manhattan, New York\n                </ion-label>\n                <ion-radio  value="3" item-start></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    MG road stature, Manhattan, New York\n                </ion-label>\n                <ion-radio  value="4" item-start></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    Silver leaf hotel, Manhattan, New York\n                </ion-label>\n                <ion-radio  value="6" item-start></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <ion-icon class="zmdi  zmdi-car"></ion-icon>\n                    Airport road, Manhattan, New York\n                </ion-label>\n                <ion-radio  value="7" item-start></ion-radio>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n   <button ion-button  no-margin full class="btn" (click)="home()">{{\'continue\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\pick_drop_location\pick_drop_location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Pick_drop_locationPage);
    return Pick_drop_locationPage;
}());

//# sourceMappingURL=pick_drop_location.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select_start_datePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_ebike_api__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_end_date_select_end_date__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DatePipe } from '@angular/common';
var Select_start_datePage = /** @class */ (function () {
    function Select_start_datePage(navCtrl, http, api) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.api = api;
        this.event = {};
        this.trip = { startDate: '' };
    }
    Select_start_datePage.prototype.select_end_date = function () {
        console.log("Selecting Start date ....", this.trip);
        this.api.selectStartDate(this.trip).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
        // this.http.post('http://localhost:3000/api/startDates', {
        //   startDate: moment(this.trip.startDate),
        // }).subscribe(response => { console.log(response) }, error => { console.log(error) })
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__select_end_date_select_end_date__["a" /* Select_end_datePage */]);
    };
    Select_start_datePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-select_start_date',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_start_date\select_start_date.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'select_start_date\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="calendar_box">\n        <ion-calendar #calendar lang="en"></ion-calendar>\n    </div>\n\n    <div class="select_date">\n        <h2>{{\'select_trip_start_time\' | translate}}</h2>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="YYYY-MM-DD HH:mm:ss" [(ngModel)]="trip.startDate">\n        </ion-datetime>\n        <h3>{{\'tab_to_select\' | translate}}</h3>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button no-margin full class="btn" (click)="select_end_date()">{{\'select_end_date\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\select_start_date\select_start_date.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__providers_api_ebike_api__["a" /* EbikeApiProvider */]])
    ], Select_start_datePage);
    return Select_start_datePage;
}());

//# sourceMappingURL=select_start_date.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car_listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_car_book_car__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filters_filters__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HttpClient } from '@angular/common/http';
var Car_listPage = /** @class */ (function () {
    function Car_listPage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.bike = [];
        this.bike = this.api.getFetchedData();
        console.log("Car_listPage :\n", this.bike);
    }
    Car_listPage.prototype.book_car = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_car_book_car__["a" /* Book_carPage */]);
    };
    Car_listPage.prototype.filters = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__filters_filters__["a" /* FiltersPage */]);
    };
    Car_listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-car_list',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\car_list\car_list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Campus Bike UTM, Faculty Alam Bina parking</ion-title>\n    </ion-navbar>\n    <ion-row>\n        <ion-col col-5 text-start>\n            <p>Sat, 15 Jun, 5:30 pm</p>\n        </ion-col>\n        <ion-col col-2 text-center>\n            <ion-icon class="zmdi zmdi-arrow-right"></ion-icon>\n        </ion-col>\n        <ion-col col-5 text-end>\n            <p>Tue, 18 Jun, 10:30 pm</p>\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="container">\n        <ion-list no-lines no-margin>\n            <ion-item *ngFor="let item of bike">\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>{{item.bike_number}}</h2>\n                       <!---- <h5>5 Seater | White</h5>-->\n                        <p class="d-flex">\n                            <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                            Campus Bike UTM, Faculty Alam Bina parking\n                        </p>\n\n                        <div class="btn_box d-flex ">\n                            <h3 class="without_fuel">{{bike.bike_status}}\n                                <span>Status</span>\n                            </h3>\n                          <!----  <h3 class="with_fuel">$150.00\n                                <span> With fuel</span>\n                            </h3>-->\n                        </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 1.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 2</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 2.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 3</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 3.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 4</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 4.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 5</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 5.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 6</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 6.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 7</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 7.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n\n            <ion-item>\n                <ion-row>\n                    <ion-col col-8>\n                        <h2>Bike 8</h2>\n                        <!---- <h5>5 Seater | White</h5>-->\n                         <p class="d-flex">\n                             <ion-icon class="zmdi zmdi-pin"></ion-icon>\n                             Campus Bike UTM, Faculty Alam Bina parking\n                         </p>\n \n                         <div class="btn_box d-flex ">\n                             <h3 class="without_fuel">Available\n                                 <span>Status</span>\n                             </h3>\n                           <!----  <h3 class="with_fuel">$150.00\n                                 <span> With fuel</span>\n                             </h3>-->\n                         </div>\n                    </ion-col>\n                    <ion-col col-4>\n                        <div class="car_img">\n                            <img src="assets/imgs/Bike_image 8.jpg">\n                        </div>\n                        <button ion-button no-margin block class="btn" (click)="book_car()">{{\'book_now\' | translate}}</button>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer no-border>\n    <div class="icon_box d-flex" (click)="filters()">\n        <ion-badge item-end>1</ion-badge>\n        <ion-icon class="zmdi zmdi-filter-list end"></ion-icon>\n    </div>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\car_list\car_list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */]) === "function" && _b || Object])
    ], Car_listPage);
    return Car_listPage;
    var _a, _b;
}());

//# sourceMappingURL=car_list.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book_carPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Book_carPage = /** @class */ (function () {
    function Book_carPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.startTrip = __WEBPACK_IMPORTED_MODULE_2_moment___default()('2020-08-05 18:00:00');
        this.stopTrip = __WEBPACK_IMPORTED_MODULE_2_moment___default()('2020-08-06 14:01:00');
        this._startedDate = this.startTrip.format('YYYY/MM/DD');
        this._startedTime = this.startTrip.format('HH:mm:ss');
        this._stopDate = this.stopTrip.format('YYYY/MM/DD');
        this._stopTime = this.stopTrip.format('HH:mm:ss');
        this._duration = this.stopTrip.diff(this.startTrip, 'hours');
    }
    ;
    Book_carPage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
    };
    Book_carPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book_car',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\book_car\book_car.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title></ion-title>\n    </ion-navbar>\n    <ion-row>\n        <ion-col col-6>\n            <h2>Bike</h2>\n            <h3>3</h3>\n        </ion-col>\n        <ion-col col-6 text-end>\n            <img src="assets/imgs/Bike_image 3.jpg">\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <ion-row>\n            <ion-col col>\n                <h4>{{\'trip_start\' | translate}}</h4>\n                <h2>{{_startedDate}} </h2>\n                <h3>{{_startedTime}}</h3>\n            </ion-col>\n            <ion-col col class="trevl_time">\n                <h3>{{_duration}} Hours</h3>\n            </ion-col>\n            <ion-col col text-end>\n                <h4>{{\'trip_end\' | translate}}</h4>\n                <h2>{{_stopDate}} </h2>\n                <h3>{{_stopTime}}</h3>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div class="container">\n        <h4>{{\'pick_up_location\' | translate}}</h4>\n        <ion-row>\n            <ion-col col-7>\n                <h2>Campus Bike UTM<br> Faculty of Alam Bina parking</h2>\n            </ion-col>\n\n            <ion-col col-5>\n                <div class="map center_img">\n                    <img src="assets/imgs/map.png" class="crop_img">\n                    <ion-icon class="zmdi zmdi-car" text-center></ion-icon>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <!---- <div class="container">\n        <h4>{{\'pick_up_location\' | translate}}</h4>\n        <ion-row>\n            <ion-col col-3>\n                <h2 class="">\n                    <ion-icon class="zmdi zmdi-gas-station"></ion-icon>\n                    Fuel\n                </h2>\n            </ion-col>\n            <ion-col col-6 text-center>\n                <h2 class="">\n                    <ion-icon class="zmdi zmdi-badge-check"></ion-icon>\n                    Insurance\n                </h2>\n            </ion-col>\n            <ion-col col-3 text-end>\n                <h2 class="">\n                    <ion-icon class="zmdi zmdi-assignment"></ion-icon>\n                    Taxes\n                </h2>\n            </ion-col>\n        </ion-row>\n    </div>-->\n</ion-content>\n<ion-footer no-border>\n    <div class="container">\n        <ion-row>\n            <ion-col col-12>\n                <h4>{{\'amount_breakup\' | translate}}</h4>\n                <h2 class="d-flex"> {{\'base_fare\' | translate}}<span class="end">RM 20 </span></h2>\n                <h2 class="d-flex"> {{\'Extra hours\' | translate}}<span class="end">RM 10 </span></h2>\n                <!--<h2 class="d-flex">{{\'taxes\' | translate}}<span class="end">$ 90.00 </span></h2>-->\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class="btn_box" (click)="payment()">\n        <h2 class="d-flex">{{\'proceed_to_payment\' | translate}}<span class="end">RM 30 </span></h2>\n    </div>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\book_car\book_car.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], Book_carPage);
    return Book_carPage;
    var _a;
}());

//# sourceMappingURL=book_car.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booked_booked__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaymentPage.prototype.booked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booked_booked__["a" /* BookedPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\payment\payment.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title></ion-title>\n    </ion-navbar>\n    <h2 class="d-flex">{{\'payable_amount\' | translate}} <span class="end">RM 30</span></h2>\n</ion-header>\n\n<ion-content>\n    <div class="payment_options ">\n        <div class="container">\n            <h2>{{\'select_payment_method\' | translate}}</h2>\n        </div>\n        <ion-list no-lines no-margin radio-group>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/card.png">\n                        <h3>{{\'credit_card\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="card" item-start></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/paypal.png">\n                        <h3>{{\'pay_pal\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="pay_pal" item-start></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/payU.png">\n                        <h3>{{\'pay_u_money\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="pay_u_money" item-start></ion-radio>\n                </ion-item>\n                \n                  <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/card.png">\n                        <h3>{{\'credit_card\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="card1" item-start></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/paypal.png">\n                        <h3>{{\'pay_pal\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="pay_pal1" item-start></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-center>\n                        <img src="assets/imgs/payU.png">\n                        <h3>{{\'pay_u_money\' | translate}}</h3>\n                    </ion-label>\n                    <ion-radio value="pay_u_money1" item-start></ion-radio>\n                </ion-item>\n            </ion-scroll>\n        </ion-list>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'card_number\' | translate}}</ion-label>\n                <ion-input type="text" value="987 543 1098 7654"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'name_on_card\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>{{\'expiry_date\' | translate}}</ion-label>\n                        <ion-input type="text" value="12/23"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>{{\'security_code\' | translate}}</ion-label>\n                        <ion-input type="text" value="779"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button no-margin full class="btn" (click)="booked()">{{\'pay_now\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\payment\payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_bookings_my_bookings__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookedPage = /** @class */ (function () {
    function BookedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookedPage.prototype.my_bookings = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__my_bookings_my_bookings__["a" /* My_bookingsPage */]);
    };
    BookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booked',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\booked\booked.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>booked</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content text-center>\n    <div class="banner" text-right>\n        <img src="assets/imgs/img_vector.png">\n    </div> \n    <h1>{{\'booked_successfully\' | translate}}</h1>\n\n    <p>Hey Sam, you\'ve booked <br>Bike 3 successfully. <br> Go to My Booking for<br> more booking details.</p>\n    <p>\n        {{\'have_a_good_ride\' | translate}} !\n    </p>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button no-margin full class="btn" (click)="my_bookings()">{{\'my_bookings\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\booked\booked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookedPage);
    return BookedPage;
}());

//# sourceMappingURL=booked.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersPage = /** @class */ (function () {
    function FiltersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\filters\filters.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title> {{\'sort_fitlers\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <ion-list no-lines>\n            <h2>{{\'car_priority\' | translate}}</h2>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox checked="true" item-start></ion-checkbox>\n                        <ion-label>Hyundai Elantra</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Nissan Altima</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Chevrolet Cruze</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Honda Accord</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Ford Fusion</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox checked="true" item-start></ion-checkbox>\n                        <ion-label>Toyota Corolla</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Nisan Sentra</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>Toyota Camry</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n        <ion-list no-lines>\n            <h2>{{\'seating_capacity\' | translate}}</h2>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox checked="true" item-start></ion-checkbox>\n                        <ion-label>2 Seater</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>4 Seater</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>3 Seater</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-checkbox item-start></ion-checkbox>\n                        <ion-label>5+ Seater</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n\n        <ion-list no-lines radio-group>\n            <h2>{{\'price_sort_by\' | translate}}</h2>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                          <ion-radio checked="true" value="low_to_high" item-start></ion-radio>\n                        <ion-label>Price low to high</ion-label>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                          <ion-radio  value="high_to_low" item-start></ion-radio>\n                        <ion-label>Price high to low</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n   <button ion-button  no-margin full class="btn">{{\'apply_filters\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\filters\filters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doc_verificatinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_verified_doc_verified__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Doc_verificatinoPage = /** @class */ (function () {
    function Doc_verificatinoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Doc_verificatinoPage.prototype.doc_verified = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doc_verified_doc_verified__["a" /* Doc_verifiedPage */]);
    };
    Doc_verificatinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doc_verificatino',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\doc_verificatino\doc_verificatino.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span>\n                {{\'you_need_to_upload\' | translate}}<br> {{\'your_driving_licence\' | translate}}\n            </span>\n            <h2> {{\'upload_goverment\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="add_lincence">\n        <ion-scroll scrollX="true">\n            <div class="img_box center_img active">\n                <!--                <img src="assets/imgs/l1.png" class="crop_img">-->\n                <ion-icon class="zmdi zmdi-plus-circle"></ion-icon>\n            </div>\n            <div class="img_box center_img">\n                <!--                <img src="assets/imgs/l2.png" class="crop_img">-->\n                <ion-icon class="zmdi zmdi-plus-circle"></ion-icon>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <div class=\'container\'>\n        <h2 class="d-flex">\n            <ion-icon class="zmdi zmdi-camera"></ion-icon>\n            {{\'use_camera\' | translate}}\n        </h2>\n        <h2 class="d-flex">\n            <ion-icon class="zmdi zmdi-image"></ion-icon> \n            {{\'upload_from_gallery\' | translate}}\n        </h2>\n    </div>\n    <button ion-button no-margin full class="btn" (click)="doc_verified()">{{\'verify\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\doc_verificatino\doc_verificatino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Doc_verificatinoPage);
    return Doc_verificatinoPage;
}());

//# sourceMappingURL=doc_verificatino.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doc_verifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Doc_verifiedPage = /** @class */ (function () {
    function Doc_verifiedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Doc_verifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doc_verified',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\doc_verified\doc_verified.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="d-flex">\n                <span>\n                    {{\'your_licence_is\' | translate}}\n                    <br>\n                    <strong>{{\'approved\' | translate}}</strong>\n                </span>\n                <ion-icon class="zmdi zmdi-check-circle end"></ion-icon>\n            </span>\n            <h2> {{\'we_ve_verified_your_lincence\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="add_lincence">\n        <ion-scroll scrollX="true">\n            <div class="img_box center_img active">\n                <img src="assets/imgs/l1.png" class="crop_img">\n                <!--                <ion-icon class="zmdi zmdi-plus-circle"></ion-icon>-->\n            </div>\n            <div class="img_box center_img">\n                <img src="assets/imgs/l2.png" class="crop_img">\n                <!--                <ion-icon class="zmdi zmdi-plus-circle"></ion-icon>-->\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <div class=\'container\'>\n        <h2 class="d-flex">\n            <ion-icon class="zmdi zmdi-plus-circle"></ion-icon>\n            {{\'add_change_screenshot\' | translate}}\n        </h2>\n        <h2 class="d-flex">\n            <ion-icon class="zmdi zmdi-delete"></ion-icon>\n            {{\'delete_document\' | translate}}\n        </h2>\n    </div>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\doc_verified\doc_verified.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Doc_verifiedPage);
    return Doc_verifiedPage;
}());

//# sourceMappingURL=doc_verified.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terms_conditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Terms_conditionPage = /** @class */ (function () {
    function Terms_conditionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Terms_conditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms_condition',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\terms_condition\terms_condition.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{\'terms_condition\' | translate}}\n            <h2>Companies policies</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n        </p>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.</p>\n        <h2>Terms of use</h2>\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n        </p>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.</p>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\terms_condition\terms_condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Terms_conditionPage);
    return Terms_conditionPage;
}());

//# sourceMappingURL=terms_condition.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\support\support.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{\'we_are_happy_to\' | translate}}<br>{{\'hear_from_you\' | translate}}\n            <h2> {{\'let_us_know_your_queries_feedback\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner">\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block clear no-margin icon-start class="btn">\n                    <ion-icon class="zmdi zmdi-local-phone"></ion-icon>\n                    {{\'call_us\' | translate}}\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block no-margin icon-start class="btn">\n                    <ion-icon class="zmdi zmdi-email"></ion-icon>\n                    {{\'mail_us\' | translate}}\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class="form">\n        <h2>{{\'or_send_your_message\' | translate}}</h2>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'contact_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'your_message\' | translate}}</ion-label>\n                <ion-input type="text" value="{{\'write_your_message\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button no-margin full class="btn">{{\'submit_now\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sign_inPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Sign_inPage = /** @class */ (function () {
    function Sign_inPage(navCtrl, http, alrt, api) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alrt = alrt;
        this.api = api;
        this.login = { user_email: '', user_password: '' };
    }
    Sign_inPage.prototype.sign_up = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* Sign_upPage */]);
    };
    Sign_inPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    Sign_inPage.prototype.sign_in = function () {
        var _this = this;
        console.log("Signing in ....", this.login);
        this.api.signIn(this.login)
            .subscribe(function (response) {
            console.log(response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.log(error);
            _this.alertPopup("Alert", "Login Failed");
        });
        // this.http.post('http://192.168.1.25:3000/api/Users/login', {
        //   email: this.login.user_email,
        //   password: this.login.user_password
        // }).subscribe(response => { this.navCtrl.push(HomePage) }, error => { console.log(error); this.alertPopup("Alert", "Login Failed") })
        //this.navCtrl.push(HomePage);
    };
    Sign_inPage.prototype.alertPopup = function (title, Msg) {
        var alrt = this.alrt.create({
            title: title,
            subTitle: Msg,
            buttons: ['OK']
        });
        alrt.present();
    };
    Sign_inPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign_in',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\sign_in\sign_in.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'welcome_to\' | translate}}<br>\n            {{\'app_title1\' | translate}}<span>{{\'app_title2\' | translate}}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <div class="banner" text-left>\n        <img src="assets/imgs/bike rent.png">\n    </div> \n    <div class="socila_section">\n        <p> {{\'continue_with_social_account\' | translate}}</p>\n        <ion-row>\n            <ion-col col-6>\n\n                <button ion-button block clear icon-start class="btn facebook">\n                    <img src="assets/imgs/fb.png">\n                    {{\'facebook\' | translate}}\n                </button>\n            </ion-col>\n            <ion-col col-6>\n\n                <button ion-button clear block icon-start class="btn google">\n                    <img src="assets/imgs/google.png">\n                    {{\'google\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class="form">\n        <h2> {{\'or_signin_with_your_account\' | translate}}</h2>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'email_phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="" [(ngModel)]="login.user_email"></ion-input>\n            </ion-item>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'password\' | translate}}<span class="end">{{\'forgot\' | translate}}</span></ion-label>\n                <ion-input type="password" value="" [(ngModel)]="login.user_password"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col col-6 no-padding>\n            <button ion-button full clear no-margin class="btn" (click)="sign_up()">{{\'sign_up\' | translate}}</button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button no-margin full class="btn" (click)="sign_in()">{{\'sign_in_now\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\sign_in\sign_in.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_ebike_api__["a" /* EbikeApiProvider */]) === "function" && _d || Object])
    ], Sign_inPage);
    return Sign_inPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=sign_in.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sign_upPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { VerificationPage } from '../verification/verification';


var Sign_upPage = /** @class */ (function () {
    function Sign_upPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.register = { username: '', email: '', password: '' };
    }
    Sign_upPage.prototype.verification = function () {
        console.log("Registering user ....", this.register);
        this.http.post('http://localhost:3000/api/Users', {
            username: this.register.username,
            email: this.register.email,
            //phone_number: this.register.user_phone_number,
            password: this.register.password
        }).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    Sign_upPage.prototype.sign_up = function () {
    };
    Sign_upPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign_up',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\sign_up\sign_up.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'create_account\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content> \n    <div class="form">\n        <div class="img_box center_img">\n            <!--            <img src="" class="crop_img">-->\n            <ion-icon class="zmdi zmdi-camera"></ion-icon>\n        </div>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'enter_full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="" [(ngModel)]="register.username"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'Enter mail address\' | translate}}</ion-label>\n                <ion-input type="text" value="" [(ngModel)]="register.email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value=""[(ngModel)]="register.user_phone_number"></ion-input>\n            </ion-item>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'create_password\' | translate}}</ion-label>\n                <ion-input type="password" value=""[(ngModel)]="register.password"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button  no-margin full class="btn" (click)="verification()">{{\'sign_up_now\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\sign_up\sign_up.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], Sign_upPage);
    return Sign_upPage;
}());

//# sourceMappingURL=sign_up.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic3_calendar_en__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_car_book_car__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_booked_booked__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_car_list_car_list__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_doc_verificatino_doc_verificatino__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_doc_verified_doc_verified__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filters_filters__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pick_drop_location_pick_drop_location__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_select_city_select_city__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_select_end_date_select_end_date__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_select_start_date_select_start_date__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sign_up_sign_up__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_support_support__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_condition_terms_condition__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_providers_sign_in_sign_in_providers_sign_in_sign_in__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_api_ebike_api__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_car_book_car__["a" /* Book_carPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booked_booked__["a" /* BookedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_list_car_list__["a" /* Car_listPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_doc_verificatino_doc_verificatino__["a" /* Doc_verificatinoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_doc_verified_doc_verified__["a" /* Doc_verifiedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__["a" /* My_bookingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pick_drop_location_pick_drop_location__["a" /* Pick_drop_locationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_select_city_select_city__["a" /* Select_cityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_select_end_date_select_end_date__["a" /* Select_end_datePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_start_date_select_start_date__["a" /* Select_start_datePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__["a" /* Sign_inPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sign_up_sign_up__["a" /* Sign_upPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_condition_terms_condition__["a" /* Terms_conditionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__["a" /* VerificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_book_car_book_car__["a" /* Book_carPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booked_booked__["a" /* BookedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_car_list_car_list__["a" /* Car_listPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_doc_verificatino_doc_verificatino__["a" /* Doc_verificatinoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_doc_verified_doc_verified__["a" /* Doc_verifiedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__["a" /* My_bookingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pick_drop_location_pick_drop_location__["a" /* Pick_drop_locationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_select_city_select_city__["a" /* Select_cityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_select_end_date_select_end_date__["a" /* Select_end_datePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_select_start_date_select_start_date__["a" /* Select_start_datePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_in_sign_in__["a" /* Sign_inPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sign_up_sign_up__["a" /* Sign_upPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_condition_terms_condition__["a" /* Terms_conditionPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_verification_verification__["a" /* VerificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_providers_sign_in_sign_in_providers_sign_in_sign_in__["a" /* ProvidersSignInSignInProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_api_ebike_api__["a" /* EbikeApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bm": 217,
	"./bm.js": 217,
	"./bn": 218,
	"./bn.js": 218,
	"./bo": 219,
	"./bo.js": 219,
	"./br": 220,
	"./br.js": 220,
	"./bs": 221,
	"./bs.js": 221,
	"./ca": 222,
	"./ca.js": 222,
	"./cs": 223,
	"./cs.js": 223,
	"./cv": 224,
	"./cv.js": 224,
	"./cy": 225,
	"./cy.js": 225,
	"./da": 226,
	"./da.js": 226,
	"./de": 227,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 227,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 231,
	"./el.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-il": 236,
	"./en-il.js": 236,
	"./en-in": 237,
	"./en-in.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./en-sg": 239,
	"./en-sg.js": 239,
	"./eo": 240,
	"./eo.js": 240,
	"./es": 241,
	"./es-do": 242,
	"./es-do.js": 242,
	"./es-us": 243,
	"./es-us.js": 243,
	"./es.js": 241,
	"./et": 244,
	"./et.js": 244,
	"./eu": 245,
	"./eu.js": 245,
	"./fa": 246,
	"./fa.js": 246,
	"./fi": 247,
	"./fi.js": 247,
	"./fil": 248,
	"./fil.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./ga": 254,
	"./ga.js": 254,
	"./gd": 255,
	"./gd.js": 255,
	"./gl": 256,
	"./gl.js": 256,
	"./gom-deva": 257,
	"./gom-deva.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./gu": 259,
	"./gu.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it-ch": 268,
	"./it-ch.js": 268,
	"./it.js": 267,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ku": 276,
	"./ku.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mn": 286,
	"./mn.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./oc-lnc": 297,
	"./oc-lnc.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./tg": 318,
	"./tg.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tk": 320,
	"./tk.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./ug-cn": 327,
	"./ug-cn.js": 327,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-mo": 337,
	"./zh-mo.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_bookings_my_bookings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_doc_verificatino_doc_verificatino__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terms_condition_terms_condition__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_support_support__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ngx_translate_core__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* Sign_inPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.my_profile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__["a" /* My_profilePage */]);
    };
    MyApp.prototype.my_bookings = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_my_bookings_my_bookings__["a" /* My_bookingsPage */]);
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.doc_verificatino = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_doc_verificatino_doc_verificatino__["a" /* Doc_verificatinoPage */]);
    };
    MyApp.prototype.terms_condition = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_terms_condition_terms_condition__["a" /* Terms_conditionPage */]);
    };
    MyApp.prototype.support = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */]);
    };
    MyApp.prototype.sign_in = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* Sign_inPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <div class="profile_box d-flex" menuClose (click)="my_profile()">\n            <div class="profile_img center_img">\n                <img src="assets/imgs/profile_pic.png" class="crop_img">\n            </div>\n            <div class="profile_details">\n                <h2>Sam Smith</h2>\n                <p>{{\'view_profile\' | translate}}</p>\n            </div>\n        </div>\n        <ion-list no-lines>\n            <ion-item menuClose (click)="my_bookings()" class="active">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-car"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'my_bookings\' | translate}}</h2>\n            </ion-item>\n        </ion-list>\n    </ion-header>\n\n    <ion-content>\n        <ion-list no-lines>\n            <ion-item menuClose (click)="home()">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-home"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'home\' | translate}}</h2>\n            </ion-item>\n            <ion-item menuClose (click)="doc_verificatino()">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-badge-check"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'doc_verification\' | translate}}</h2>\n            </ion-item>\n            <ion-item menuClose (click)="terms_condition()">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-assignment"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'terms_condition\' | translate}}</h2>\n            </ion-item>\n            <ion-item menuClose (click)="support()">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-email"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'need_help\' | translate}}</h2>\n            </ion-item>\n            <ion-item menuClose>\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-thumb-up"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'rate_us\' | translate}}</h2>\n            </ion-item>\n            <ion-item menuClose (click)="sign_in()">\n                <ion-avatar item-start>\n                    <ion-icon class="zmdi zmdi-power-setting"></ion-icon>\n                </ion-avatar>\n                <h2>{{\'logout\' | translate}}</h2>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"E:\Workspace\gitlab\ebike\frontend\src\pages\verification\verification.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'verification_code\' | translate}}\n            <h2> {{\'verification_code_massage\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'enter_verification_code\' | translate}}</ion-label>\n                <ion-input type="text" value="5887"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <button ion-button   no-margin full class="btn" (click)="home()">{{\'sign_up_now\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"E:\Workspace\gitlab\ebike\frontend\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersSignInSignInProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProvidersSignInSignInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProvidersSignInSignInProvider = /** @class */ (function () {
    function ProvidersSignInSignInProvider(http) {
        this.http = http;
        console.log('Hello ProvidersSignInSignInProvider Provider');
    }
    ProvidersSignInSignInProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProvidersSignInSignInProvider);
    return ProvidersSignInSignInProvider;
}());

//# sourceMappingURL=providers-sign-in-sign-in.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.js.map