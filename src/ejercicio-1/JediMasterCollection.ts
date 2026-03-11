import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { JediMaster } from "./JediMaster";
import { Affiliation, SearchByAffiliation, SearchByPlanet, SearchByYear, SearchByPower } from "./interfaces";


/**
 * @class JediMasterCollection
 * Clase que representa una colección de Maestros Jedi, extendiendo la funcionalidad básica de BasicGalacticCollection
 * y añadiendo métodos de búsqueda específicos para Maestros Jedi, como búsqueda por afiliación, planeta de origen,
 * año de entrenamiento y nivel de poder.
 * @extends {BasicGalacticCollection<JediMaster>} - Extiende la clase genérica BasicGalacticCollection para manejar objetos de tipo JediMaster.
 * @implements {SearchByAffiliation<JediMaster>} - Implementa la interfaz SearchByAffiliation para permitir la búsqueda de Maestros Jedi por afiliación.
 * @implements {SearchByPlanet<JediMaster>} - Implementa la interfaz SearchByPlanet para permitir la búsqueda de Maestros Jedi por planeta de origen.
 * @implements {SearchByYear<JediMaster>} - Implementa la interfaz SearchByYear para permitir la búsqueda de Maestros Jedi por año de entrenamiento.
 * @implements {SearchByPower<JediMaster>} - Implementa la interfaz SearchByPower para permitir la búsqueda de Maestros Jedi por nivel de poder.
 */

export class JediMasterCollection extends BasicGalacticCollection<JediMaster> 
  implements SearchByAffiliation<JediMaster>, SearchByPlanet<JediMaster>, SearchByYear<JediMaster>, SearchByPower<JediMaster> {
    /**
     * @method searchByName - Método para buscar Maestros Jedi por nombre, devolviendo un array de coincidencias.
     * @param name - El nombre o parte del nombre del Maestro Jedi a buscar.
     * @returns - Un array de Maestros Jedi que coinciden con el criterio de búsqueda por nombre.
     */
    searchByName(name: string): JediMaster[] {
        return this.items.filter(jedi => jedi.name.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * @method searchByAffiliation - Método para buscar Maestros Jedi por afiliación, devolviendo un array de coincidencias.
     * @param affiliation - La afiliación del Maestro Jedi a buscar (por ejemplo, "Jedi Order", "Sith", etc.).
     * @returns - Un array de Maestros Jedi que coinciden con el criterio de búsqueda por afiliación.
     */
    searchByAffiliation(affiliation: Affiliation): JediMaster[] {
        return this.items.filter(jedi => jedi.affiliation === affiliation);
    }

    /**
     * @method searchByPlanet - Método para buscar Maestros Jedi por planeta de origen, devolviendo un array de coincidencias.
     * @param planet 
     * @returns 
     */
    searchByPlanet(planet: string): JediMaster[] {
        return this.items.filter(jedi => jedi.originPlanet.toLowerCase().includes(planet.toLowerCase()));
    }

    /**
     * @method searchByYear - Método para buscar Maestros Jedi por año de entrenamiento, devolviendo un array de coincidencias.
     * @param year - El año de entrenamiento para buscar Maestros Jedi.
     * @returns - Un array de Maestros Jedi que coinciden con el criterio de búsqueda por año de entrenamiento.
     */
    searchByYear(year: number): JediMaster[] {
        return this.items.filter(jedi => jedi.trainingYear === year);
    }

    /**
     * @method searchByPower - Método para buscar Maestros Jedi por nivel de poder, devolviendo un array de coincidencias.
     * @param power - El nivel de poder mínimo para buscar Maestros Jedi.
     * @returns - Un array de Maestros Jedi que coinciden con el criterio de búsqueda por nivel de poder.
     */
    searchByPower(power: number): JediMaster[] {
        return this.items.filter(jedi => jedi.powerLevel >= power);
    }
  }