import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebserviceService } from '../services/APICall/webservice.service';
import { GlobalService } from '../services/GlobalService/global.service';
import { ImageListPage } from '../image-list/image-list.page';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.page.html',
  styleUrls: ['./upload-document.page.scss'],
})
export class UploadDocumentPage implements OnInit {
  docs: any = [
    { name: 'Aadhar', code: 101 },
    { name: 'Passport', code: 102 },
    { name: 'Voter Id', code: 103 },
    { name: 'Driving License', code: 104 }
  ];
  docType: any;
  docList: any = [];
  doc_code: any;
  doc_number: any;
  doc_id: string;
  constructor(
    public service: WebserviceService,
    public modalController: ModalController,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.retrieveDocList();
    this.clearInfo();
  }


  captureDocInfo() {
    if (this.doc_code == undefined || this.doc_code == 'undefined' || this.doc_code == '' || this.doc_code == null) {
      this.globalService.globalAlert('Alert!', "Select Document type");
    } else if (this.doc_number == undefined || this.doc_number == 'undefined' || this.doc_number == '' || this.doc_number == null) {
      this.globalService.globalAlert('Alert!', "Enter Document Number");
    } else {
      if (this.docList.length == 0) {
        this.insertDocList();
      } else if (this.doc_id != "") {
        this.insertDocList();
      } else {
        console.log(this.isCode());
        if (this.isCode() != true) {
          this.insertDocList();
        } else {
          this.globalService.globalAlert('Alert!', "Aleready Exist");
        }
      }

    }

  }

  insertDocList() {
    if (this.doc_id == "") {
      let data = {
        doc_code: this.doc_code,
        doc_name: this.getDocName(),
        doc_number: this.doc_number,
        user_id: this.globalService.getUserById()
      }
      this.service.apiCall('/document/insertDocType', "post", data, true).then((res) => {
        this.globalService.globalAlert('Alert!', "Document Info Inserted Successfully").then(() => {
          this.retrieveDocList();
          this.clearVal();
        });
      }, (err) => {
        console.log(JSON.stringify(err));
        this.globalService.globalAlert('Alert!', err);
      })
    } else {
      let data = {
        doc_code: this.doc_code,
        doc_name: this.getDocName(),
        doc_number: this.doc_number,
        user_id: this.globalService.getUserById(),
        _id: this.doc_id
      }
      this.service.apiCall('/document/updateDocInfo', "post", data, true).then((res) => {
        this.globalService.globalAlert('Alert!', "Document Info Updated Successfully").then(() => {
          this.retrieveDocList();
          this.clearVal();
        });
      }, (err) => {
        console.log(JSON.stringify(err));
        this.globalService.globalAlert('Alert!', err);
      })
    }
  }

  retrieveDocList() {
    let data = {
      user_id: this.globalService.getUserById()
    }
    this.service.apiCall('/document/docTypeList', "post", data, true).then((res) => {
      console.log(res);
      this.docList = res;
      console.log(JSON.stringify(this.docList));
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }

  deleteDet(id) {
    let data = {
      _id: id
    }
    this.service.apiCall('/document/deleteDocInfo', "post", data, true).then((res) => {
      this.retrieveDocList();
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }

  updateDet(id) {
    let data = {
      _id: id
    }
    this.service.apiCall('/document/docTypeListById', "post", data, true).then((res) => {
      this.doc_id = res[0]._id;
      this.doc_code = res[0].doc_code;
      this.doc_number = res[0].doc_number;
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }

  clearVal() {
    this.doc_code = "";
    this.doc_number = '';
    this.doc_id = "";
  }

  clearInfo() {
    this.clearVal();
  }


  getDocName() {
    for (var i in this.docs) {
      if (this.docs[i].code == this.doc_code) {
        return this.docs[i].name;
      }
    }
  }

  isCode() {
    for (var i in this.docList) {
      if (this.docList[i].doc_code == this.doc_code) {
        return true;
      }
    }
  }

  async presentModal(item) {
    const modal = await this.modalController.create({
      component: ImageListPage,
      cssClass: 'userDetailModalCss',
      componentProps: { data: item }
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
      });
    return await modal.present();

  }

  uploadDoc(item) {
    this.presentModal(item);
  }



}
