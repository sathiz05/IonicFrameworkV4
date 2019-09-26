import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/GlobalService/global.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../services/APICall/webservice.service';
import { AuthServiceService } from '../services/authService/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  uName: any = "sathish";
  uPsw: any = "123456";
  constructor(
    public globalService: GlobalService,
    public route: Router,
    public webservice: WebserviceService,
    public authService: AuthServiceService
  ) { }

  ngOnInit() {
  }
  loginFn() {
    if (this.uName && this.uPsw) {
      // this.globalService.globalAlert('Alert',"Show Message!!!");
      let data = {
        username: this.uName,
        password: this.uPsw
      }

      this.webservice.apiCall('/login/loginUser', "post", data, false).then((res) => {
        let data = (<any>res);
        if (data.message !== "Invalid User") {
          console.log(res);
          console.log((<any>res).fields[0]._id);
          console.log(`token =>${data.token}`);

          this.globalService.setToken(data.token);
          this.globalService.setUserId(data.fields[0]._id);
          this.authService.isUserAuthenticated(true);
          this.globalService.TOAST_MESSAGE(data.message).then(() => {
            this.route.navigate(['/curd-width-node']);
          });

        } else {
          this.authService.isUserAuthenticated(false);
          this.globalService.TOAST_MESSAGE(data.message);
        }
      }, (err) => {
        this.authService.isUserAuthenticated(false);
        console.log(JSON.stringify(err));
      })
    } else {
      this.globalService.TOAST_MESSAGE("Enter user name Or password.");
    }
  }

  signupFn() {
    this.route.navigate(['/registration']);
  }

}
