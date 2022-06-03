import { Component } from '@angular/core';
import { FruitsPage } from '../fruits/fruits';
import { NativeStoragePage } from '../native-storage/native-storage';
import { SettingsPage } from '../settings/settings';
import { SqlliteStoragePage } from '../sqllite-storage/sqllite-storage';
import { TakePicPage } from '../take-pic/take-pic';
import { UserprofilePage } from '../userprofile/userprofile';
@Component({
selector: 'page-tabs',
templateUrl: 'tabs.html'
})
export class TabsPage {
fruitsPage = FruitsPage;
nativeStoragePage=NativeStoragePage;
SQLlitePage=SqlliteStoragePage;
}