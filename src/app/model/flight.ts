import { Route } from "./route";


export class Flight{
    public id?:Number;
    public arrivalTime?:Date;
    public capacity?:Number;
    public departureTime?:Date;
    public flightNumber?:String;
    public price?:Number;
    public status?:Number;
    public route?:Route;
    public deleteStatus?: Boolean;

}