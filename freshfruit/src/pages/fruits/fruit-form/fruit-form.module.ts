import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitFormPage } from './fruit-form';

@NgModule({
  declarations: [
    FruitFormPage,
  ],
  imports: [
    IonicPageModule.forChild(FruitFormPage),
  ],
})
export class FruitFormPageModule {}
