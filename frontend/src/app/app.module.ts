import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from "@angular/router";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppSettings } from "./app.settings";
import { AuthGuard, AuthToken } from "./service";
import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
import { SharedComponent, 
         PageTopComponent 
       } from './component/shared';
import { LoginComponent } from './component/login';
import { NoteComponent } from './component/note';
import { PageComponent } from './component/page';



@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PageTopComponent,
    LoginComponent,
    NoteComponent,
    PageComponent,
    PageTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [
    AuthGuard,
    AuthToken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
