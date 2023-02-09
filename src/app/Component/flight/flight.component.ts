import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/Service/route.service';
import { FlightService } from 'src/app/Service/flight.service';
import { Flight } from 'src/app/model/flight';
import { Route } from 'src/app/model/route';
import { Airport } from 'src/app/model/airport';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  
  public flights: Flight[];
  public routes: Route[];
  public flightInput:Flight;


  constructor(private flightService?:FlightService, private routeService?:RouteService) { 
    this.flightInput = new Flight();
    this.flightInput.route=new Route();
    

    
   
    
  }


  public getFlight(): void{
    this.flightService?.getFlight().subscribe(
      (response: Flight[]) => {
        this.flights = response;
        console.log(this.flights);
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


public addFlight(): void{

  this.flightService?.addFlight(this.flightInput!).subscribe(
    (response: Flight) => {
      console.log(response);
    this.refresh();
     this.getRoute();

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )
}


public updateFlight(): void{

  this.flightService?.updateFlight(this.flightInput!).subscribe(
    (response: Flight) => {
      console.log(response);
    this.refresh();
     this.getRoute();

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )
}


public deleteFlight(flight:Flight): void {
  flight.deleteStatus=true;
  this.flightService?.updateFlight(flight).subscribe(
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
    this.getFlight();
    this.getRoute();
  
  
  }

 

}
