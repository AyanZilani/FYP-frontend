import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarModule } from 'ionic3-calendar-en';

import { MyApp } from './app.component';
import { Book_carPage } from '../pages/book_car/book_car';
import { BookedPage } from '../pages/booked/booked';
import { Car_listPage } from '../pages/car_list/car_list';
import { Doc_verificatinoPage } from '../pages/doc_verificatino/doc_verificatino';
import { Doc_verifiedPage } from '../pages/doc_verified/doc_verified';
import { FiltersPage } from '../pages/filters/filters';
import { HomePage } from '../pages/home/home';
import { My_bookingsPage } from '../pages/my_bookings/my_bookings';
import { My_profilePage } from '../pages/my_profile/my_profile';
import { PaymentPage } from '../pages/payment/payment';
import { Pick_drop_locationPage } from '../pages/pick_drop_location/pick_drop_location';
import { Select_cityPage } from '../pages/select_city/select_city';
import { Select_end_datePage } from '../pages/select_end_date/select_end_date';
import { Select_start_datePage } from '../pages/select_start_date/select_start_date';
import { Sign_inPage } from '../pages/sign_in/sign_in';
import { Sign_upPage } from '../pages/sign_up/sign_up';
import { SupportPage } from '../pages/support/support';
import { Terms_conditionPage } from '../pages/terms_condition/terms_condition';
import { VerificationPage } from '../pages/verification/verification';
import { AdminPage } from '../pages/admin/admin';
import { AddBikePage } from '../pages/add-bike/add-bike';
import { ReportPage } from '../pages/report/report';
import {DeleteBikePage} from '../pages/delete-bike/delete-bike'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProvidersSignInSignInProvider } from '../providers/providers-sign-in-sign-in/providers-sign-in-sign-in';
import { EbikeApiProvider } from '../providers/api/ebike-api';
import { CookiesProvider } from '../providers/cookies/cookies';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Book_carPage,
    BookedPage,
    Car_listPage,
    Doc_verificatinoPage,
    Doc_verifiedPage,
    FiltersPage,
    HomePage,
    My_bookingsPage,
    My_profilePage,
    PaymentPage,
    Pick_drop_locationPage,
    Select_cityPage,
    Select_end_datePage,
    Select_start_datePage,
    Sign_inPage,
    Sign_upPage,
    SupportPage,
    Terms_conditionPage,
    VerificationPage,
    AdminPage,
    ReportPage,
    AddBikePage,
    DeleteBikePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Book_carPage,
    BookedPage,
    Car_listPage,
    Doc_verificatinoPage,
    Doc_verifiedPage,
    FiltersPage,
    HomePage,
    My_bookingsPage,
    My_profilePage,
    PaymentPage,
    Pick_drop_locationPage,
    Select_cityPage,
    Select_end_datePage,
    Select_start_datePage,
    Sign_inPage,
    Sign_upPage,
    SupportPage,
    Terms_conditionPage,
    VerificationPage,
    AdminPage,
    ReportPage,
    AddBikePage,
    DeleteBikePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProvidersSignInSignInProvider,
    EbikeApiProvider,
    CookiesProvider
  ]
})
export class AppModule { }
