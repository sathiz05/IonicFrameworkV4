import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  USER_ID: any;
  TOKEN: any;
  USERBY_ID: any;

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }
  isObjNull(obj) {
    return Object.keys(obj).length;
  }

  async globalAlert(headerName, msg) {
    let showAlert = await this.alertController.create({
      header: headerName,
      message: msg,
      cssClass: 'alertCustomCss',
      buttons: ['ok']
    })
    showAlert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'please wait....',
      duration: 10000
    });
    await loading.present();


  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }

  setUserId(value) {
    this.USER_ID = value;
  }

  getUserId() {
    return this.USER_ID;
  }
  setUserById(value) {
    this.USERBY_ID = value;
  }

  getUserById() {
    return this.USERBY_ID;
  }
  setToken(value) {
    this.TOKEN = value;
  }

  getToken() {
    return this.TOKEN;
  }

  async TOAST_MESSAGE(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

}
