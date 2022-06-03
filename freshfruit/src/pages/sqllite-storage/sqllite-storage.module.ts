import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqlliteStoragePage } from './sqllite-storage';

@NgModule({
  declarations: [
    SqlliteStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(SqlliteStoragePage),
  ],
})
export class SqlliteStoragePageModule {}
