import { describe, expect, test } from "vitest";
import { Cardio } from "../src/ejercicio-3/Cardio";

describe("Cardio", () => {
  test("debería crear un entrenamiento de cardio correctamente", () => {
    const run = new Cardio("Sprint", 2, 10, "carrera", 150);
    
    expect(run.name).toBe("Sprint");
    expect(run.distance).toBe(2);
    expect(run.duration).toBe(10);
    expect(run.activityType).toBe("carrera");
    expect(run.calories()).toBe(150);
  });

  test("debería generar el resumen en formato texto", () => {
    const swim = new Cardio("Natación en piscina", 1.5, 45, "natación", 400);
    expect(swim.summary()).toBe("Natación en piscina (natación): 1.5 km en 45 min.");
  });
  

  test("debería lanzar error si los valores son inválidos", () => {
    expect(() => new Cardio("Test", -1, 10, "remo", 100)).toThrowError("La distancia no puede ser negativa.");
    expect(() => new Cardio("Test", 1, 0, "remo", 100)).toThrowError("La duración debe ser mayor que cero.");
    expect(() => new Cardio("Test", 1, 10, "remo", -5)).toThrowError("Las calorías quemadas no pueden ser negativas.");
  });
});