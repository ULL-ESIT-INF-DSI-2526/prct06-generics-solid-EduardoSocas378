import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { Starship } from "./Starship";
import { Affiliation, ShipClass, SearchByAffiliation, SearchByPlanet, SearchByYear, SearchByClass } from "./interfaces";

/**
 * @class StarshipCollection - Clase que representa una colección de naves espaciales, extendiendo la funcionalidad básica de BasicGalacticCollection
 * y añadiendo métodos de búsqueda específicos para naves espaciales, como búsqueda por afiliación, planeta de origen, año de producción y clase de nave.
 * @extends {BasicGalacticCollection<Starship>} - Extiende la clase genérica BasicGalacticCollection para manejar objetos de tipo Starship.
 * @implements {SearchByAffiliation<Starship>} - Implementa la interfaz SearchByAffiliation para permitir la búsqueda de naves espaciales por afiliación.
 * @implements {SearchByPlanet<Starship>} - Implementa la interfaz SearchByPlanet para permitir la búsqueda de naves espaciales por planeta de origen.
 * @implements {SearchByYear<Starship>} - Implementa la interfaz SearchByYear para permitir la búsqueda de naves espaciales por año de producción.
 * @implements {SearchByClass<Starship>} - Implementa la interfaz SearchByClass para permitir la búsqueda de naves espaciales por clase de nave.
 */
export class StarshipCollection extends BasicGalacticCollection<Starship>
  implements SearchByAffiliation<Starship>, SearchByPlanet<Starship>, SearchByYear<Starship>, SearchByClass<Starship>{
    
    /**
     * @method searchByName - Método para buscar naves espaciales por nombre, devolviendo un array de coincidencias.
     * @param name - El nombre o parte del nombre de la nave espacial a buscar.
     * @returns - Un array de naves espaciales que coinciden con el criterio de búsqueda por nombre.
     */
    searchByName(name: string): Starship[] {
      return this.items.filter(starship => starship.name.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * @method searchByAffiliation - Método para buscar naves espaciales por afiliación, devolviendo un array de coincidencias.
     * @param affiliation - La afiliación de la nave espacial a buscar (por ejemplo, "Rebel Alliance", "Galactic Empire", etc.).
     * @returns - Un array de naves espaciales que coinciden con el criterio de búsqueda por afiliación.
     */
    searchByAffiliation(affiliation: Affiliation): Starship[] {
      return this.items.filter(starship => starship.affiliation === affiliation);
    }

    /**
     * @method searchByPlanet - Método para buscar naves espaciales por planeta de origen, devolviendo un array de coincidencias.
     * @param planet - El planeta de origen de la nave espacial a buscar.
     * @returns - Un array de naves espaciales que coinciden con el criterio de búsqueda por planeta de origen.
     */
    searchByPlanet(planet: string): Starship[] {
      return this.items.filter(starship => starship.planetOfOrigin.toLowerCase().includes(planet.toLowerCase()));
    }
    /**
     * @method searchByYear - Método para buscar naves espaciales por año de producción, devolviendo un array de coincidencias.
     * @param year - El año de producción para buscar naves espaciales.
     * @returns - Un array de naves espaciales que coinciden con el criterio de búsqueda por año de producción.
     */
    searchByYear(year: number): Starship[] {
      return this.items.filter(starship => starship.yearOfProduction === year);
    }

    /**
     * @method searchByClass - Método para buscar naves espaciales por clase de nave, devolviendo un array de coincidencias.
     * @param clase - La clase de nave espacial a buscar (por ejemplo, "Star Destroyer", "X-Wing", etc.).
     * @returns - Un array de naves espaciales que coinciden con el criterio de búsqueda por clase de nave.
     */
    searchByClass(clase: ShipClass): Starship[] {
      return this.items.filter(starship=> starship.shipClass === clase);
    }
  }