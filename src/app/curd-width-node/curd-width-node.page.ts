import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetailModalPage } from '../user-detail-modal/user-detail-modal.page';
import { WebserviceService } from '../services/APICall/webservice.service';
import { GlobalService } from '../services/GlobalService/global.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curd-width-node',
  templateUrl: './curd-width-node.page.html',
  styleUrls: ['./curd-width-node.page.scss'],
})
export class CurdWidthNodePage implements OnInit {
  items: any;
  constructor(
    public modalController: ModalController,
    public service: WebserviceService,
    public globalService: GlobalService,
    public router: Router
  ) { }

  ngOnInit() {
    // this.presentModal();
    // this.retrieveData();
  }

  ionViewDidEnter() {

    this.retrieveData();
  }

  async presentModal(id) {
    const modal = await this.modalController.create({
      component: UserDetailModalPage,
      cssClass: 'userDetailModalCss',
      componentProps: { data: id }
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        this.retrieveData();
      });
    return await modal.present();

  }

  updateOrSave() {
    this.presentModal("");
  }

  retrieveData() {
    let data = {
      userID: this.globalService.getUserId()
    }
    this.service.apiCall("/usersWithMySQL/Allusers", "post", data, true).then((resData) => {
      console.log(JSON.stringify(resData));
      this.items = resData;
    }, (err) => {
      this.globalService.TOAST_MESSAGE(err.error.message);
    })
  }

  deleteDet(id) {
    let data = {
      _id: id
    }
    this.service.apiCall('/usersWithMySQL/userDelete', "post", data, true).then((res) => {
      console.log(res);
      this.retrieveData();
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }

  updateDet(id) {
    console.log(id);
    this.presentModal(id);
  }

  uploadDoc(id) {
    this.globalService.setUserById(id);
    this.router.navigate(['/upload-document']);
  }



}
