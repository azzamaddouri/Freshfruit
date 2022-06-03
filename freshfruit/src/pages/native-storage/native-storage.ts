import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NativeStoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-native-storage',
  templateUrl: 'native-storage.html',
})
export class NativeStoragePage {
  name: string;
surname: string;
years: number;
constructor(public navCtrl: NavController, private nativeStorage: 
NativeStorage, public alertCtrl: AlertController, public navParams: NavParams) {
}
public storeIdentity(): void {
  this.nativeStorage.setItem('my-identity-card', {
  name: this.name, 
  surname: this.surname,
  years: this.years
  })
  .then(
  () => {
  let alert = this.alertCtrl.create({
  title: 'Fruit enregistré !',
  subTitle: 'C\'est déjà enregistré !!',
  buttons: [{
    text:'D\'accord !',
  cssClass:'danger'}]
  });
  alert.present();
  },
  error => console.error('Error storing item', error)
  );
  }
  public getMyName(): void {
  this.nativeStorage.getItem('my-identity-card')
  .then(
  data => {
  this.name = data.name;
  this.surname = data.surname;
  this.years = data.years;
  },
  error => console.error(error)
  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativeStoragePage');
  }

}
