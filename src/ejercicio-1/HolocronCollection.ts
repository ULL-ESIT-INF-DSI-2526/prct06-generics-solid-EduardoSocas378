import { Holocron } from "./Holocron";
import { BasicGalacticCollection } from "./BasicGalacticCollection";
import { SearchByYear, SearchByPower } from "./interfaces";

/**
 * @class HolocronCollection
 * Clase que representa una colección de Holocrones, extendiendo la funcionalidad básica de BasicGalacticCollection
 * y añadiendo métodos de búsqueda específicos para Holocrones, como búsqueda por año de creación y nivel de poder.
 * @extends {BasicGalacticCollection<Holocron>} - Extiende la clase genérica BasicGalacticCollection para manejar objetos de tipo Holocron.
 * @implements {SearchByYear<Holocron>} - Implementa la interfaz SearchByYear para permitir la búsqueda de Holocrones por año de creación.
 * @implements {SearchByPower<Holocron>} - Implementa la interfaz SearchByPower para permitir la búsqueda de Holocrones por nivel de poder.
 */
export class HolocronCollection extends BasicGalacticCollection<Holocron> 
implements SearchByYear<Holocron>, SearchByPower<Holocron> {
    /**
     * @method searchByName - Método para buscar Holocrones por nombre, devolviendo un array de coincidencias.
     * @param name - El nombre o parte del nombre del Holocron a buscar.
     * @returns - Un array de Holocrones que coinciden con el criterio de búsqueda por nombre.
     */
    searchByName(name: string): Holocron[] {
        return this.items.filter(holocron => holocron.name.toLowerCase().includes(name.toLowerCase()));
    }
    /**
     * @method searchByPower - Método para buscar Holocrones por nivel de poder, devolviendo un array de coincidencias.
     * @param power - El nivel de poder mínimo para buscar Holocrones.
     * @returns - Un array de Holocrones que coinciden con el criterio de búsqueda por nivel de poder.
     */
    searchByPower(power: number): Holocron[] {
        return this.items.filter(holocron => holocron.powerLevel >= power);
    }

    /**
     * @method searchByYear - Método para buscar Holocrones por año de creación, devolviendo un array de coincidencias.
     * @param year - El año de creación para buscar Holocrones.
     * @returns - Un array de Holocrones que coinciden con el criterio de búsqueda por año de creación.
     */
    searchByYear(year: number): Holocron[] {
        return this.items.filter(holocron => holocron.yearOfCreation === year);
    }
}

