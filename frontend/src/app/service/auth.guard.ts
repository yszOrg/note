import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { AuthToken } from "./auth.token";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authToken: AuthToken) { }
  

  canActivate() {
     if (this.authToken.checkToken()) {
        return true;
     } 
     this.router.navigate(['/login']);
     return false;
  }

}
