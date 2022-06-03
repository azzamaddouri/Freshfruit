import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NavParams, ViewController } from 'ionic-angular';
import { Fruit } from '../../models/Fruit';
import{ FruitsService } from '../../services/fruits.service';
@Component({
  selector: 'page-single-fruit',
  templateUrl: 'single-fruit.html',
})
export class SingleFruitPage implements OnInit {
  index: number;
fruit: Fruit;
constructor(public navParams: NavParams,
public viewCtrl: ViewController,
public fruitsService: FruitsService) {
}
ngOnInit() {
this.index = this.navParams.get('index');
if (this.index<3) {
  this.fruit = this.fruitsService.fruitsList[this.index];
} 
else {
  if (this.index>=3 && this.index<6) {
    this.fruit = this.fruitsService.fruitsList1[this.index];
  } else {
    this.fruit = this.fruitsService.fruitsList2[this.index];
  }
  
  }
}
dismissModal() {
this.viewCtrl.dismiss();
}
onToggleFruit() {
this.fruit.isOn = !this.fruit.isOn;
}
onSubmitForm(form: NgForm) {
  console.log(form.value);
  this.dismissModal();
  }
  onDeleteHours() {
  this.fruit.startTime = '';
  this.fruit.endTime = '';
  this.dismissModal();
  }
}
