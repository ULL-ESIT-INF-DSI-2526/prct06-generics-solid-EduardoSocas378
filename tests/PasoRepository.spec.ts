import { describe, expect, test, beforeEach } from "vitest";
import { PasoRepository } from "../src/ejercicio-2/PasoRepository";
import { Paso } from "../src/ejercicio-2/RecipeInterfaces";

describe("PasoRepository", () => {
  let repository: PasoRepository;
  let paso1: Paso;
  let paso2: Paso;

  beforeEach(() => {
    repository = new PasoRepository();
    
    paso1 = { id: "p1", descripcion: "Hervir agua", duracion: 600, etiquetas: ["fuego", "básico"], opcional: false, vecesCompletado: 5 };
    paso2 = { id: "p2", descripcion: "Añadir sal fina", duracion: 10, etiquetas: ["condimento"], opcional: true, vecesCompletado: 2 };

    repository.add(paso1);
    repository.add(paso2);
  });

  test("debería buscar por nombre correctamente", () => {
    expect(repository.searchByName("agua")).toEqual([paso1]);
  });

test("debería buscar por etiquetas (al menos una coincidencia - lógica OR)", () => {
    // paso1 tiene "fuego" y paso2 tiene "condimento". La búsqueda debe devolver ambos.
    expect(repository.searchByTags(["condimento", "fuego"])).toEqual([paso1, paso2]);

    // Solo paso1 tiene "básico" (aunque busquemos también "inexistente", el OR lo aprueba)
    expect(repository.searchByTags(["básico", "inexistente"])).toEqual([paso1]);

    // Ningún paso tiene la etiqueta "hielo"
    expect(repository.searchByTags(["hielo"])).toEqual([]);
  });
  
  test("debería buscar por opcionalidad", () => {
    expect(repository.searchByOptional(true)).toEqual([paso2]);
    expect(repository.searchByOptional(false)).toEqual([paso1]);
  });
});