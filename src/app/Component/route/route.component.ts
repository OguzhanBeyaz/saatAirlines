import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/model/airport';
import { AirportService } from 'src/app/Service/airport.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouteService } from 'src/app/Service/route.service';
import { Route } from 'src/app/model/route';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  public airports: Airport[];
  public routes: Route[];
  public routeInput:Route;

  constructor(private airportService?:AirportService, private routeService?:RouteService) { 
    this.routeInput = new Route();
    this.routeInput.destination=new Airport();
    this.routeInput.source=new Airport();

    
  }
 
  public getAirport(): void{
    
    this.airportService?.getAirport().subscribe(
      (response: Airport[]) => {
        this.airports = response;
        console.log(this.airports);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
 }

 public getRoute(): void{
  this.routeService?.getRoute().subscribe(
    (response: Route[]) => {
      this.routes = response;
      console.log(this.routes);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}


public addRoute(): void{

  this.routeService?.addRoute(this.routeInput!).subscribe(
    (response: Route) => {
      console.log(response);
    this.refresh();

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )
}

public updateRoute(): void{

  this.routeService?.updateRoute(this.routeInput!).subscribe(
    (response: Route) => {
      console.log(response);
    this.refresh();

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )
}


public deleteRoute(route:Route): void {
  route.deleteStatus=true;
  this.routeService?.updateRoute(route).subscribe(
    () => {
      this.refresh();
     
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}



refresh(): void {
  window.location.reload();
}

  ngOnInit(): void {
    this.getAirport();
    this.getRoute();
  }

}
