import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';
import { SettingsPage } from '../pages/settings/settings';
@Component({
templateUrl: 'app.html'
})
export class MyApp {
tabsPage:any = TabsPage;
authPage:any = AuthPage;
settingsPage:any=SettingsPage;
@ViewChild('content') content: NavController;
  isAuth: boolean;
constructor(platform: Platform,
statusBar: StatusBar,
splashScreen: SplashScreen,
private menuCtrl: MenuController) {
  platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    let config = {
      apiKey: "AIzaSyAz3c-69rvTH4NhTWKhMT_e_HQwMpr17oc",
      authDomain: "freshfruits-5cee0.firebaseapp.com",
      databaseURL: "https://freshfruits-5cee0-default-rtdb.firebaseio.com",
      projectId: "freshfruits-5cee0",
      storageBucket: "freshfruits-5cee0.appspot.com",
      messagingSenderId: "600024031089",
      appId: "1:600024031089:web:c285507097f3d96ead60d0",
      measurementId: "G-2BL0X36LED"
    };
    
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(
    (user) => {
    if (user) {
    this.isAuth = true;
    this.content.setRoot(TabsPage);
    } else {
    this.isAuth = false;
    this.content.setRoot(AuthPage, {mode: 'connect'});
    }
    }
    );
    });}
onNavigate(page: any, data?: {}) {
  this.content.setRoot(page, data ? data : null);
  this.menuCtrl.close();
  }
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
    }
}
export const snapshotToArray=snapshot =>{
      let returnArray =[];
      snapshot.forEach(element => {
        let item=element.val();
        item.key=element.key;
        returnArray.push(item);
        
      });
      return returnArray;
}
