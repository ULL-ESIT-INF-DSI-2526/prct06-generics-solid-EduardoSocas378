import {describe, expect, test } from "vitest"
import { Sweet } from "../src/ejercicio-pe101/Sweet"


describe("Tests para la clase Sweet", () => {
  test("deberia crearse una receta salada correctamente", () => {
    const applePie = new Sweet("Tarta de Manzana", 5, 40, 50, 120);

    expect(applePie.name).toBe("Tarta de Manzana")
    expect(applePie.difficulty).toBe(5)
    expect(applePie.preparationTime).toBe(40),
    expect(applePie.bakingTime).toBe(50),
    expect(applePie.coolingTime).toBe(120)
  })

  test("deberia generar una descripcion como objeto", () => {
    const applePie = new Sweet("Tarta de Manzana", 5, 40, 50, 120);
    expect(applePie.desc()).toEqual({name: "Tarta de Manzana", difficulty: 5});
  })

  test("deberia devolver la suma de los tiempos", () => {
    const applePie = new Sweet("Tarta de Manzana", 5, 40, 50, 120);
    expect(applePie.time()).toBe(210)
  })
  test("deberia lanzar error si los valores son invalidos", () => {
    expect(() => new Sweet("Tarta de Manzana", -1, 40, 50, 120)).toThrowError("La dificultad debe ser un valor entre 0 y 10");
    expect(() => new Sweet("Tarta de Manzana", 11, 40, 50, 120)).toThrowError("La dificultad debe ser un valor entre 0 y 10");
    expect(() => new Sweet("Tarta de Manzana", 5, -40, 50, 120)).toThrowError("El tiempo de preparacion no puede ser negativo");
    expect(() => new Sweet("Tarta de Manzana", 5, 40, -50, 120)).toThrowError("El tiempo de horneado no puede ser negativo");
    expect(() => new Sweet("Tarta de Manzana", 5, 40, 50, -120)).toThrowError("El tiempo de enfriamiento no puede ser negativo");
  })
})