import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-types',
  templateUrl: './alert-types.page.html',
  styleUrls: ['./alert-types.page.scss'],
})
export class AlertTypesPage implements OnInit {
  radioBTNArray: any = [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ];
  EmpType_list: any = [];
  inputTypeArr: any = [];
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async basicAlert() {
    const alert = await this.alertController.create({
      header: 'Basic Alert',
      // subHeader: 'Subtitle',
      message: 'This is an basic alert message.',
      cssClass: 'alertCustomCss',
      backdropDismiss: false,
      mode: 'md',
      buttons: ['OK']
    });

    await alert.present();
  }

  async MultipleButtonAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      cssClass: 'alertCustomCssMultBTN',
      mode: 'md',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async confirmAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      cssClass: 'alertCustomCss',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(`Form Data${JSON.stringify(data)}`);
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });

    await alert.present();
  }

  async customRadioAlert() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(`Form Data${JSON.stringify(data)}`);
          }
        }
      ]
    });

    await alert.present();
  }

  async customCheckBoxAlert() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      cssClass: 'alertCustomCss',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(`Checkbox Value => ${JSON.stringify(data)}`);
          }
        }
      ]
    });

    await alert.present();
  }

  async dynamicRadioAlert() {
    this.EmpType_list = await this.alertController.create();
    this.EmpType_list.header = 'Select Employee...';
    this.EmpType_list.mode = 'md';
    this.EmpType_list.cssClass = 'alertCustomCss';
    console.log(`${this.radioBTNArray.length}`);
    console.log(`${JSON.stringify(this.EmpType_list.inputs)}`);
    this.EmpType_list.buttons = [{
      text: 'Done',
      handler: (data) => {
        console.log(`Radio Button Data =>${JSON.stringify(data)}`);
      }
    }];
    this.EmpType_list.inputs = [];
    for (let i = 0; i < this.radioBTNArray.length; i++) {
      console.log(`${this.radioBTNArray[i].type}`);
      this.inputTypeArr.push({
        name: `Radia${i + 1}`,
        label: this.radioBTNArray[i].type,
        type: 'radio',
        value: this.radioBTNArray[i].id
      });
    }
    this.EmpType_list.inputs = this.inputTypeArr;
    this.EmpType_list.translucent=true;
    this.EmpType_list.present();

  }

  async dynamicCheckBoxAlert() {
    this.EmpType_list = await this.alertController.create();
    this.EmpType_list.header = 'Select Employee...';
    this.EmpType_list.mode = 'md';
    this.EmpType_list.cssClass = 'alertCustomCss';
    console.log(`${this.radioBTNArray.length}`);
    console.log(`${JSON.stringify(this.EmpType_list.inputs)}`);
    this.EmpType_list.buttons = [{
      text: 'Done',
      handler: (data) => {
        console.log(`Radio Button Data =>${JSON.stringify(data)}`);
      }
    }];
    for (let i = 0; i < this.radioBTNArray.length; i++) {
      console.log(`${this.radioBTNArray[i].type}`);
      this.inputTypeArr.push({
        name: `Checkbox${i + 1}`,
        label: this.radioBTNArray[i].type,
        type: 'checkbox',
        value: this.radioBTNArray[i].id,
        checked:true
      });
    }
    this.EmpType_list.inputs = this.inputTypeArr;
    this.EmpType_list.translucent=true;
    this.EmpType_list.present();

  }

}
