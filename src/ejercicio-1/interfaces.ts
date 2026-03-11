
/**
 * Interfaces de búsqueda para cada tipo de colección
 * Cada interfaz define un método de búsqueda específico para un criterio determinado.
 */

/**
 * Tipos específicos para afiliación y clase de nave, que se utilizan en las interfaces de búsqueda.
 * Esto permite una mayor claridad y control sobre los valores permitidos para estos campos.
 */
export type Affiliation = "República" | "Imperio" | "Sith" | "Independiente";
export type ShipClass = "Caza" | "Destructor" | "Carguero" | "Explorador";
export interface SearchByName <T> { searchByName(name: string): T[];}
export interface SearchByAffiliation <T> { searchByAffiliation(affiliation: Affiliation): T[];}
export interface SearchByPlanet <T> { searchByPlanet(planet: string): T[];}
export interface SearchByYear <T> { searchByYear(year: number): T[];}
export interface SearchByClass <T> { searchByClass(clase: ShipClass): T[];}
export interface SearchByPower <T> { searchByPower(power: number): T[];}