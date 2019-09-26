import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WebserviceService } from '../services/APICall/webservice.service';
import { matchingPasswords } from '../validators/validators';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public service: WebserviceService,
  ) { }

  ngOnInit() {
    let EMAILPATTERN = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    }, {
        validator: matchingPasswords('password', 'confirmPassword')
      });
  }


  submit() {
    console.log(`Form Values =>${this.registerForm.value}`);
    let data = {
      firstname: this.registerForm.value.firstname,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      mobile_no: this.registerForm.value.mobile_no
    }
    this.service.apiCall('/login/signup', "post", data,false).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(JSON.stringify(err));
    })
  }



}
