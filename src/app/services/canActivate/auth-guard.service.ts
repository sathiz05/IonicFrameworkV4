import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';
import { Route } from '@angular/compiler/src/core';
@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(
    public authService: AuthServiceService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate([this.authService.loginURL()]);
    return false;
  }
}
