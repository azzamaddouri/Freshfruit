import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FruitsPage } from '../pages/fruits/fruits';
import { SingleFruitPage } from '../pages/single-fruit/single-fruit';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { FruitsService } from '../services/fruits.service';
import { AuthService } from '../services/auth.service';
import { AuthPage } from '../pages/auth/auth';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { FruitFormPage } from '../pages/fruits/fruit-form/fruit-form';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../providers/image/image';
import { TakePicPage } from '../pages/take-pic/take-pic';
import { IdentifyphotoPage } from '../pages/identifyphoto/identifyphoto';
import { HttpClientModule } from '@angular/common/http';
import { NativeStoragePage } from '../pages/native-storage/native-storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { SqlliteStoragePage } from '../pages/sqllite-storage/sqllite-storage';
import {SQLite} from '@ionic-native/sqlite'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FruitsPage,
    SingleFruitPage,
    SettingsPage,
    TabsPage,
    AuthPage,
    UserprofilePage,
    FruitFormPage,
    TakePicPage,
    IdentifyphotoPage,
    NativeStoragePage,
    SqlliteStoragePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FruitsPage,
    SingleFruitPage,
    SettingsPage,
    TabsPage,
    AuthPage,
    UserprofilePage,
    FruitFormPage,
    TakePicPage,
    IdentifyphotoPage,
    NativeStoragePage,
    SqlliteStoragePage
  ],
  providers: [
    StatusBar,
    SplashScreen,FileTransfer,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FruitsService,
    AuthService,
    NativeStorage,
    SQLite,
    Camera,
    ImageProvider
  ]
})
export class AppModule {}
