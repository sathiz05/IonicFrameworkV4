import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private redirectUrl: string = '/home';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  constructor() { }
  isUserAuthenticated(boolVal: boolean) {
    this.isloggedIn = boolVal;
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  loginURL(){
    return this.loginUrl;
  }

}
