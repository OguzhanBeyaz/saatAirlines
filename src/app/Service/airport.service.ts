import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Airport } from "../model/airport";

@Injectable({
  providedIn: 'root'
})

export class AirportService{
    base: string = "http://localhost:8080";
    private apiServerUrl ='http://localhost:8080';
    constructor(private http: HttpClient) { 

    }
    httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST,OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers':'application/json',
        })
      }

     public getAirport():Observable<Airport[]>{
        return this.http.get<Airport[]>(`${this.base}/airport/all`);
 
          }


             
     public addAirport(airport:Airport): Observable<Airport>{
      return this.http.post<Airport>(`${this.base}/airport/add`, airport);

        }

        public updateAirport(airport:Airport): Observable<Airport>{
          return this.http.put<Airport>(`${this.base}/airport/update`, airport);
    
            }

            
      
        }

        

