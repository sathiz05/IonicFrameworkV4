import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';
import { WebserviceService } from '../services/APICall/webservice.service';
import { GlobalService } from '../services/GlobalService/global.service';


@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.page.html',
  styleUrls: ['./user-detail-modal.page.scss'],
})
export class UserDetailModalPage implements OnInit {
  userForm: FormGroup;
  userId: any;
  constructor(
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public service: WebserviceService,
    public modalController: ModalController,
    public globalService: GlobalService
  ) {

  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });

    console.log(`Data =>${JSON.stringify(this.navParams.get('data'))}`);
    this.userId = this.navParams.get('data');
    if (this.userId == "") {
      this.userForm.reset();
    } else {
      // Retrieve data
      let data = {
        _id: this.userId
      }
      this.service.apiCall('/usersWithMySQL/getUsersById', "post", data,true).then((res) => {
        let userData: any = res[0];
        this.userForm.get('firstName').setValue(userData.firstname);
        this.userForm.get('lastName').setValue(userData.lastname);
        this.userForm.get('email').setValue(userData.emailid);
        this.userForm.get('mobileNo').setValue(userData.phoneno);
      }, (err) => {
        console.log(JSON.stringify(err));
      })

    }
  }

  ionViewDidEnter() {

  }

  submit() {
    console.log(`user id =>${this.userId}`);
    if (this.userId == "") {
      console.log(this.userForm.value);
      let data = {
        firstname: this.userForm.value.firstName,
        lastname: this.userForm.value.lastName,
        emailid: this.userForm.value.email,
        phoneno: this.userForm.value.mobileNo,
        signup_id:this.globalService.getUserId()
      }
      this.service.apiCall('/usersWithMySQL/userCreate', "post", data,true).then((res) => {
        console.log(res);
        this.closeModal();
      }, (err) => {
        console.log(JSON.stringify(err));
      })

    } else {

      console.log(this.userForm.value);
      let data = {
        firstname: this.userForm.value.firstName,
        lastname: this.userForm.value.lastName,
        emailid: this.userForm.value.email,
        phoneno: this.userForm.value.mobileNo,
        _id: this.userId
      }
      this.service.apiCall('/usersWithMySQL/userEdit', "post", data,true).then((res) => {
        console.log(res);
        this.closeModal();
      }, (err) => {
        console.log(JSON.stringify(err));
      })

    }
  }

  closeModal() {
    this.modalController.dismiss("Close");
  }

}
