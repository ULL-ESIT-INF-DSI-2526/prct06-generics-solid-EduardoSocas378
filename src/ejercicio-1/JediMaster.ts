import { Affiliation } from "./interfaces";

export interface JediMaster {
  name: string;
  affiliation: Affiliation;
  originPlanet: string;
  trainingYear: number;
  powerLevel: number;
}