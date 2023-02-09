import { HttpClient,HttpHeaders,HttpParams, HttpParamsOptions } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from "../model/route";



@Injectable({
  providedIn: 'root'
})

export class RouteService{
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
    

      public getRoute():Observable<Route[]>{
        return this.http.get<Route[]>(`${this.base}/route/all`);
 
          }


             
     public addRoute(route:Route): Observable<Route>{
      return this.http.post<Route>(`${this.base}/route/add`, route);

        }

        public updateRoute(route:Route): Observable<Route>{
          return this.http.put<Route>(`${this.base}/route/update`, route);
    
            }

            public deleteRoute(route_id:number): Observable<void>{
              return this.http.delete<void>(`${this.base}/route/delete/${route_id}`);
        
                }
     

}  