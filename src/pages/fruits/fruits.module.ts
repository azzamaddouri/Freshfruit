import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruitsPage } from './fruits';

@NgModule({
  declarations: [
    FruitsPage,
  ],
  imports: [
    IonicPageModule.forChild(FruitsPage),
  ],
})
export class FruitsPageModule {}
