import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibModule,MyNewLibModule } from 'my-new-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MyNewLibModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
