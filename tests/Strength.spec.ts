import { describe, expect, test } from "vitest";
import { Strength } from "../src/ejercicio-3/Strength";

describe("Strength", () => {
  test("debería crear un entrenamiento de fuerza correctamente", () => {
    const squat = new Strength("Sentadilla", 80, 5, 8, 40);
    
    expect(squat.name).toBe("Sentadilla");
    expect(squat.weight).toBe(80);
    expect(squat.sets).toBe(5);
    expect(squat.reps).toBe(8);
    expect(squat.caloriesPerSet).toBe(40);
  });

  test("debería calcular las calorías totales (series * calorías por serie)", () => {
    const deadlift = new Strength("Peso Muerto", 100, 3, 5, 60);
    expect(deadlift.calories()).toBe(180); // 3 * 60
  });

  test("debería generar el resumen como un objeto", () => {
    const curl = new Strength("Curl de Bíceps", 15, 3, 12, 20);
    expect(curl.summary()).toEqual({ nombre: "Curl de Bíceps", peso: 15 });
  });

  test("debería lanzar error si los valores son inválidos", () => {
    expect(() => new Strength("Test", -10, 3, 10, 20)).toThrowError("El peso no puede ser negativo.");
    expect(() => new Strength("Test", 10, 0, 10, 20)).toThrowError("El número de series debe ser mayor que cero.");
    expect(() => new Strength("Test", 10, 3, 0, 20)).toThrowError("El número de repeticiones debe ser mayor que cero.");
    expect(() => new Strength("Test", 10, 3, 10, -5)).toThrowError("Las calorías por serie no pueden ser negativas.");
  });
});