import { describe, expect, test, beforeEach } from "vitest";
import { RecipeTimeEstimator } from "../src/ejercicio-2/RecipeTimeEstimator";
import { Receta, Paso } from "../src/ejercicio-2/RecipeInterfaces";

describe("RecipeTimeEstimator", () => {
  let estimator: RecipeTimeEstimator;
  let recetaFija: Receta;
  let recetaConOpcionales: Receta;

  beforeEach(() => {
    estimator = new RecipeTimeEstimator();

    const pasoObligatorio1: Paso = { id: "p1", descripcion: "Cortar patatas", duracion: 600, etiquetas: [], opcional: false, vecesCompletado: 0 };
    const pasoObligatorio2: Paso = { id: "p2", descripcion: "Freír patatas", duracion: 900, etiquetas: [], opcional: false, vecesCompletado: 0 };
    const pasoOpcional: Paso = { id: "p3", descripcion: "Añadir cebolla", duracion: 300, etiquetas: [], opcional: true, vecesCompletado: 0 };

    // Receta de 1500 segundos exactos
    recetaFija = {
      id: "r1", nombre: "Tortilla sin cebolla", añoPublicacion: 2020,
      pasos: [pasoObligatorio1, pasoObligatorio2]
    };

    // Receta entre 1500 y 1800 segundos
    recetaConOpcionales = {
      id: "r2", nombre: "Tortilla con cebolla", añoPublicacion: 2020,
      pasos: [pasoObligatorio1, pasoObligatorio2, pasoOpcional]
    };
  });

  test("debería contar el número de pasos correctamente", () => {
    expect(estimator.countSteps(recetaFija)).toBe(2);
    expect(estimator.countSteps(recetaConOpcionales)).toBe(3);
  });

  test("debería devolver un número exacto si no hay pasos opcionales", () => {
    const time = estimator.estimateTime(recetaFija);
    expect(time).toBe(1500); // 600 + 900
  });

  test("debería devolver un rango {min, max} si hay pasos opcionales", () => {
    const time = estimator.estimateTime(recetaConOpcionales);
    expect(time).toEqual({ min: 1500, max: 1800 }); // min: obligatorios, max: todos
  });
});