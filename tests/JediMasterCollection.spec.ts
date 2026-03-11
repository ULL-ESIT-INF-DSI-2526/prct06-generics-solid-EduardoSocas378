import { describe, expect, test, beforeEach } from "vitest";
import { JediMasterCollection } from "../src/ejercicio-1/JediMasterCollection.ts";
import { JediMaster } from "../src/ejercicio-1/JediMaster.ts";
import { Affiliation } from "../src/ejercicio-1/interfaces.ts";

describe("Ejercicio 1 - JediMasterCollection", () => {
  let collection: JediMasterCollection;
  let yoda: JediMaster;
  let luke: JediMaster;
  let darthVader: JediMaster;

  beforeEach(() => {
    collection = new JediMasterCollection();
    yoda = { name: "Yoda", affiliation: "República", originPlanet: "Dagobah", trainingYear: 896, powerLevel: 99 };
    luke = { name: "Luke Skywalker", affiliation: "República", originPlanet: "Tatooine", trainingYear: 1977, powerLevel: 85 };
    darthVader = { name: "Darth Vader", affiliation: "Imperio", originPlanet: "Tatooine", trainingYear: 1977, powerLevel: 90 };
    collection.add(yoda);
    collection.add(luke);
    collection.add(darthVader);
  })

  test('deberia añadir un Jedi Correctamente', () => {
    const newJedi: JediMaster = { name: "Obi-Wan Kenobi", affiliation: "República", originPlanet: "Stewjon", trainingYear: 1977, powerLevel: 80 };
    collection.add(newJedi);
    expect(collection.getAll()).toContain(newJedi);
  });

  test('deberia buscar por nombre correctamente', () => {
    const result = collection.searchByName("Luke");
    expect(result).toEqual([luke]);
    const result2 = collection.searchByName("sky");
    expect(result2).toEqual([luke]);
  });

  test('deberia buscar por afiliación correctamente', () => {
    const result = collection.searchByAffiliation("República" as Affiliation);
    expect(result).toEqual([yoda, luke]);
  });

  test('deberia buscar por planeta de origen correctamente', () => {
    const result = collection.searchByPlanet("Tatooine");
    expect(result).toEqual([luke, darthVader]);
  });

  test('deberia buscar por año de entrenamiento correctamente', () => {
    const result = collection.searchByYear(1977);
    expect(result).toEqual([luke, darthVader]);
  });

  test('deberia buscar por nivel de poder correctamente', () => {
    const result = collection.searchByPower(90);
    expect(result).toEqual([yoda, darthVader]);
  });

  test('debería lanzar un error al intentar eliminar un Jedi que no existe', () => {
    const maceWindu: JediMaster = { name: "Mace Windu", affiliation: "República", originPlanet: "Haruun Kal", trainingYear: 50, powerLevel: 90 };
    
    expect(() => collection.remove(maceWindu)).toThrowError();
  });

})