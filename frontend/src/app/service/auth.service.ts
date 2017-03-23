import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class Auth implements CanActivate {

  constructor(private router: Router) { }
  
  getAuth ():Boolean {
    return !!localStorage.getItem("auth");
  }
  
  setAuth () {
     localStorage.setItem("auth", +new Date() + "")
  }

  canActivate() {
     if (this.getAuth()) {
        return true;
     } 
     this.router.navigate(['/login']);
     return false;
  }

}
