import { ShipClass, Affiliation } from "./interfaces";

export interface Starship{
    name: string;
    affiliation: Affiliation;
    shipClass: ShipClass;
    yearOfProduction: number;
    planetOfOrigin: string;
}