import { Paso } from "./RecipeInterfaces";
import { BaseRepository } from "./BaseRepository";
import { SearchableByName, SearchableByTags, SearchableByOptional } from "./SearchableInterfaces";

export class PasoRepository extends BaseRepository<Paso, string>
  implements SearchableByName<Paso>, SearchableByTags<Paso>, SearchableByOptional<Paso> {
    searchByName(name: string): Paso[] {
      return this.items.filter(paso => paso.descripcion.toLowerCase().includes(name.toLowerCase()));
    }

    searchByTags(tags: string[]): Paso[] {
      return this.items.filter(paso => tags.some(tag => paso.etiquetas.includes(tag)));
    }

    searchByOptional(opcional: boolean): Paso[] {
      return this.items.filter(paso => paso.opcional === opcional);
    }
}