import { Receta } from "./RecipeInterfaces";
import { BaseRepository } from "./BaseRepository";
import { SearchableByName, SearchableByYearRange } from "./SearchableInterfaces";

export class RecipeRepository extends BaseRepository<Receta, string> 
  implements SearchableByName<Receta>, SearchableByYearRange<Receta> {
  searchByName(name: string): Receta[] {
    return this.items.filter(receta => receta.nombre.toLowerCase().includes(name.toLowerCase()));
  }

  searchByYearRange(start: number, end?: number): Receta[] {
    return this.items.filter(receta => {
      if (end === undefined){
        return receta.añoPublicacion === start;
      } else {
        return receta.añoPublicacion >= start && receta.añoPublicacion <= end;
      }
    })
  }
}