import { describe, expect, test, beforeEach } from "vitest";
import { RecipeRepository } from "../src/ejercicio-2/RecipeRepository"; // Ajusta el nombre si la llamaste RecetaRepository
import { Receta } from "../src/ejercicio-2/RecipeInterfaces";

describe("RecipeRepository", () => {
  let repository: RecipeRepository;
  let recetaAntigua: Receta;
  let recetaNueva: Receta;

  beforeEach(() => {
    repository = new RecipeRepository();
    
    recetaAntigua = { id: "r1", nombre: "Sopa de ajo", añoPublicacion: 1990, pasos: [] };
    recetaNueva = { id: "r2", nombre: "Tostada de aguacate", añoPublicacion: 2023, pasos: [] };

    repository.add(recetaAntigua);
    repository.add(recetaNueva);
  });

  test("debería buscar por nombre", () => {
    expect(repository.searchByName("sopa")).toEqual([recetaAntigua]);
  });

  test("debería buscar por un año exacto", () => {
    expect(repository.searchByYearRange(1990)).toEqual([recetaAntigua]);
  });

  test("debería buscar por un rango de años", () => {
    expect(repository.searchByYearRange(1980, 2000)).toEqual([recetaAntigua]);
    expect(repository.searchByYearRange(1980, 2024)).toEqual([recetaAntigua, recetaNueva]);
  });
});