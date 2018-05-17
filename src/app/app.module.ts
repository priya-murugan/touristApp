import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { DatabaseProvider } from '../providers/database/database';
import {SQLite} from '@ionic-native/sqlite';
import {PlacesPageModule} from "../pages/places/places.module";
import {PlacesDetailPageModule} from "../pages/places-detail/places-detail.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import { Toast } from '@ionic-native/toast';
@NgModule({
  declarations: [
    MyApp,
    HomePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlacesPageModule,
    PlacesDetailPageModule,
    TabsPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage],
  providers: [
    StatusBar,
    SQLite,
    Toast,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
