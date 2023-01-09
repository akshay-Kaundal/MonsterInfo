import { Company } from "./company";
import { Geoloc } from "./geoloc";

export interface Address {
    street:string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geoloc
}
