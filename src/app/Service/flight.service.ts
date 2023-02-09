import { HttpClient,HttpHeaders,HttpParams, HttpParamsOptions } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from "../model/flight";


@Injectable({
  providedIn: 'root'
})

export class FlightService{
    base: string = "http://localhost:8080";
    constructor(private http: HttpClient) { 

    }
    httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST',
        'Access-Control-Allow-Headers':'application/json',
        })
      }
 
      public getFlight():Observable<Flight[]>{
        return this.http.get<Flight[]>(`${this.base}/flight/all`);
 
          }


             
     public addFlight(route:Flight): Observable<Flight>{
      return this.http.post<Flight>(`${this.base}/flight/add`, route);

        }

        public updateFlight(route:Flight): Observable<Flight>{
          return this.http.put<Flight>(`${this.base}/flight/update`, route);
    
            }

            public deleteFlight(route_id:number): Observable<void>{
              return this.http.delete<void>(`${this.base}/flight/delete/${route_id}`);
        
                }
     

}  