import { Component, OnInit } from '@angular/core';
import { AuthToken } from "../../service";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private authToken: AuthToken) { }

  logout() {
    this.authToken.logout();
  }
  ngOnInit() {
  }

}
