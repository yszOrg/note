import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class AuthToken {
  constructor(private router: Router) { }

  login = function(){
     localStorage.setItem("auth", +new Date() + "");
     this.router.navigate(["/"]);
  }
  logout = function(){
     localStorage.removeItem("auth");
     this.router.navigate(["/login"]);
  }

  checkToken = function(){
     return !!localStorage.getItem("auth");
  }
  getToken = function(){
     return localStorage.getItem("auth");
  }
}
