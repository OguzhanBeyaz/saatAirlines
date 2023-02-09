import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Airport } from 'src/app/model/airport';
import { AirportService } from 'src/app/Service/airport.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  public airports: Airport[];
  public airportInput:Airport;
  

  constructor( private airportService?:AirportService) {
    this.airportInput = new Airport();

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
  
  public addAirport(): void{

    this.airportService?.addAirport(this.airportInput!).subscribe(
      (response: Airport) => {
        console.log(response);
      this.refresh();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

  refresh(): void {
    window.location.reload();
}


public updateAirport(): void{

  this.airportService?.updateAirport(this.airportInput!).subscribe(
    (response: Airport) => {
      console.log(response);
    this.refresh();
     

    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )
}


public deleteAirport(airport:Airport): void {
  airport.deleteStatus=true;
  this.airportService?.updateAirport(airport).subscribe(
    () => {
      this.refresh();
     
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}





  ngOnInit(): void {
    this.getAirport();

  }
 
  
  
}
