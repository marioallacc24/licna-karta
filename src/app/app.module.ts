import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadIdsComponent } from './components/read-ids/read-ids.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReadIdsV2Component } from './components/read-ids-v2/read-ids-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadIdsComponent,
    NavbarComponent,
    HomeComponent,
    ReadIdsV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
