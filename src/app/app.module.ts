import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailModalPageModule } from './user-detail-modal/user-detail-modal.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageListPageModule } from './image-list/image-list.module';
import { AuthGuardService } from './services/canActivate/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    UserDetailModalPageModule,
    FormsModule,
    ReactiveFormsModule,
    ImageListPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
