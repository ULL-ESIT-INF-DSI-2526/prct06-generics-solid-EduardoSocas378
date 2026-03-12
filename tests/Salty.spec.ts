import {describe, expect, test } from "vitest"
import { Salty } from "../src/ejercicio-pe101/Salty"


describe("Tests para la clase Salty", () => {
  test("deberia crearse una receta salada correctamente", () => {
    const steak = new Salty("Paella", "Spain", 15, "Principal");

    expect(steak.name).toBe("Paella")
    expect(steak.originCountry).toBe("Spain")
    expect(steak.estimatedTime).toBe(15),
    expect(steak.plateType).toBe("Principal")
  })

  test("deberia generar una cadena de texto con las descripcion", () => {
    const mojo = new Salty("Mojo Picon", "Spain", 5, "Salsa")
    expect(mojo.desc()).toBe("La receta Mojo Picon, originaria de Spain se prepara en un tiempo estimado de 5 minutos y se caracteriza por ser Salsa");
  })

  test("deberia devolver el tiempo de preparacion estimado"), () => {
    const mojo = new Salty("Mojo Picon", "Spain", 5, "Salsa")
    expect(mojo.time()).toBe(5)
  }
  test("deberia lanzar error si los valores son invalidos", () => {
    expect(() => new Salty("Fideos", "China", -15, "Principal")).toThrowError("El tiempo estimado no puede ser 0 o negativo");
    expect(() => new Salty("Fideos", "China", 0, "Principal")).toThrowError("El tiempo estimado no puede ser 0 o negativo");
  })
})