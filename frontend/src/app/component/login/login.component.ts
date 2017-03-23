import { Component, OnInit } from '@angular/core';
import { AuthToken } from "../../service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authToken:AuthToken) { }
  login(){
    this.authToken.login()
  } 

  ngOnInit() {
    // console.log(this.authToken)
  }

}
