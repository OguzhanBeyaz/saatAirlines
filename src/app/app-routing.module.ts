import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './Component/airport/airport.component';
import { FlightComponent } from './Component/flight/flight.component';
import { HomeComponent } from './Component/home/home.component';
import { RouteComponent } from './Component/route/route.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "Home", component: HomeComponent},
  {path: "Flight", component: FlightComponent},
  {path: "Route", component: RouteComponent},
  {path: "Airport", component: AirportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
