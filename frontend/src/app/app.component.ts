import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data = {};
  constructor(private http:Http) {
    
  }
  ngOnInit() {
    this.http.get("/api/uu8")
      .subscribe(res=> this.data = res.json())
  }

}
