import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { FlightComponent } from './Component/flight/flight.component';

import { RouteComponent } from './Component/route/route.component';
import { AirportComponent } from './Component/airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightComponent,
    RouteComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
