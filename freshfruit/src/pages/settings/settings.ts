import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/app.component';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  ref=firebase.database().ref('users/');
  users=[];
  inputText:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl: MenuController) {
  this.ref.on('value',resp=>{
    this.users=snapshotToArray(resp);
  });

  }
addUser(item: any){
  if (item!==undefined && item!==null) {
    let newItem=this.ref.push();
  newItem.set(item);
  this.inputText='';
  }
}
async deleteUser(key: string){

  firebase.database().ref('users/'+key).remove();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }
  isDisabled: boolean;
  userid: any;
  
  
  onToggleMenu() {
    this.menuCtrl.open();
    
    }
}
