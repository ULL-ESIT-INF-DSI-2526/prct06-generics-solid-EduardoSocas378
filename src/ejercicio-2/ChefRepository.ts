import {BaseRepository} from "./BaseRepository";
import {Chef} from "./RecipeInterfaces";
import {SearchableByName, SearchableByFollowers} from "./SearchableInterfaces";

export class ChefRepository extends BaseRepository<Chef,string> 
implements SearchableByName<Chef>, SearchableByFollowers<Chef> {
  searchByName(name: string): Chef[]{
    return this.items.filter(chef => chef.nombre.toLowerCase().includes(name.toLowerCase()));
  }

  searchByFollowers(min: number): Chef[]{
    return this.items.filter(chef => chef.seguidores >= min);
  }
}