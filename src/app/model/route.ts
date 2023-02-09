import { Airport } from "./airport";

export class Route{
    public id?:Number;
    public distanceInMiles?:String;
    public destination?:Airport;
    public source?:Airport;
    public deleteStatus?: Boolean;

}

