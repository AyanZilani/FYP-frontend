import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { My_profilePage } from '../pages/my_profile/my_profile';
import { My_bookingsPage } from '../pages/my_bookings/my_bookings';
import { HomePage } from '../pages/home/home';
import { Doc_verificatinoPage } from '../pages/doc_verificatino/doc_verificatino';
import { Terms_conditionPage } from '../pages/terms_condition/terms_condition';
import { SupportPage } from '../pages/support/support';
import { Sign_inPage } from '../pages/sign_in/sign_in';
import {TranslateService} from '../../node_modules/@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp { 
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Sign_inPage;
    
  pages: Array<{title: string, component: any}>;

   constructor(private platform: Platform, private statusBar:  StatusBar, private splashScreen: SplashScreen, public translate:TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  } 

    initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
         this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
 my_profile() {
  this.nav.setRoot(My_profilePage);
  } 
 my_bookings() {
  this.nav.setRoot(My_bookingsPage);
  } 
 home() {
  this.nav.setRoot(HomePage);
  } 
 doc_verificatino() {
  this.nav.setRoot(Doc_verificatinoPage);
  } 
 terms_condition() {
  this.nav.setRoot(Terms_conditionPage);
  } 
 support() {
  this.nav.setRoot(SupportPage);
  } 
 sign_in() {
  this.nav.setRoot(Sign_inPage);
  } 
    
}
