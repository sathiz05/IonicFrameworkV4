import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { WebserviceService } from '../services/APICall/webservice.service';
import { GlobalService } from '../services/GlobalService/global.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.page.html',
  styleUrls: ['./image-list.page.scss'],
})
export class ImageListPage implements OnInit {
  selectedFile: File = null;
  docTypeId: any;
  docType: any;
  items: any = [];

  constructor(
    // public navParams: NavParams,
    public service: WebserviceService,
    public modalController: ModalController,
    public globalService: GlobalService,
    public http: HttpClient,
    public navParams: NavParams
  ) {
    this.docTypeId = this.navParams.get('data')._id;
    this.docType = this.navParams.get('data').doc_code;
    console.log(this.docType);

  }

  ngOnInit() {
    this.getImages();
  }



  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    /* let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    }; */
    const fd = new FormData();
    fd.append('docTypeId', this.docTypeId);
    fd.append('userId', this.globalService.getUserById());
    fd.append('kycImage', this.selectedFile, this.selectedFile.name);

    this.http.post("http://localhost:3000/upload/profile", fd).subscribe((resData) => {
      this.globalService.TOAST_MESSAGE((<any>resData).message).then(() => {
        this.getImages();
      })
    }, (err) => {
      this.globalService.TOAST_MESSAGE(err.error.message);

    })
  }

  close() {
    this.modalController.dismiss("Close");
  }

  getImages() {
    let data = {
      doc_type: this.docType
    }
    this.service.apiCall('/upload/getImages', "post", data, false).then((res) => {
      console.log(res);
      this.items = (<any>res).data;
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }



}
