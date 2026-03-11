import { describe, expect, test, beforeEach } from "vitest";
import { ChefRepository } from "../src/ejercicio-2/ChefRepository";
import { Chef } from "../src/ejercicio-2/RecipeInterfaces"; 

describe("ChefRepository", () => {
  let repository: ChefRepository;
  let gordon: Chef;
  let arguinano: Chef;

  beforeEach(() => {
    repository = new ChefRepository();
    
    gordon = { 
      id: "c1", nombre: "Gordon Ramsay", seguidores: 15000000, 
      recetario: { id: "r1", nombre: "Hell's Kitchen", recetas: [] } 
    };
    
    arguinano = { 
      id: "c2", nombre: "Karlos Arguiñano", seguidores: 500000, 
      recetario: { id: "r2", nombre: "Rico Rico", recetas: [] } 
    };

    repository.add(gordon);
    repository.add(arguinano);
  });

  test("debería obtener un chef por su ID", () => {
    expect(repository.getById("c1")).toEqual(gordon);
    expect(repository.getById("c99")).toBeUndefined();
  });

  test("debería eliminar un chef correctamente", () => {
    repository.remove("c2");
    expect(repository.getAll().length).toBe(1);
    expect(repository.getById("c2")).toBeUndefined();
  });

  test("debería buscar chefs por nombre (ignorando mayúsculas)", () => {
    const result = repository.searchByName("gordon");
    expect(result).toEqual([gordon]);
  });

  test("debería buscar chefs por mínimo de seguidores", () => {
    const result = repository.searchByFollowers(1000000); // Mínimo 1 millón
    expect(result).toEqual([gordon]); // Arguiñano se queda fuera
  });
});