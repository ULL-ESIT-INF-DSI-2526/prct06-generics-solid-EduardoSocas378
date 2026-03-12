import { describe, expect, test, beforeEach} from "vitest"
import { CookBook }  from "../src/ejercicio-pe101/CookBook"
import { Salty } from "../src/ejercicio-pe101/Salty"
import { Sweet } from "../src/ejercicio-pe101/Sweet"

describe("Pruebas para el recetario CookBook", () => {
  let libroCocinitas: CookBook<Salty | Sweet>
  let paella: Salty
  let applePie: Sweet

  beforeEach(() => {
    libroCocinitas = new CookBook<Salty | Sweet>();
    paella = new Salty("Paella", "Spain", 15, "Principal")
    applePie = new Sweet("Tarta de Manzana", 5, 40, 50, 120);

    libroCocinitas.add(paella);
    libroCocinitas.add(applePie);
  });

  test("deberia añadir y contar las recetas correctamente", () => {
    expect(libroCocinitas.size()).toBe(2);
  })

  test("deberia obtener una receta por su indice", () => {
    expect(libroCocinitas.get(0)).toBe(paella);
    expect(libroCocinitas.get(1)).toBe(applePie);
    expect(libroCocinitas.get(99)).toBeUndefined();
  })

  test("deberia eliminar una receta por su indice", () => {
    libroCocinitas.remove(0);
    expect(libroCocinitas.size()).toBe(1);
    expect(libroCocinitas.get(0)).toBe(applePie); 
  });

  test("no deberia hacer nada ni dar error si se intenta eliminar un indice fuera de rango", () => {
    const initialSize = libroCocinitas.size();

    libroCocinitas.remove(-1);
    expect(libroCocinitas.size()).toBe(initialSize);

    libroCocinitas.remove(99);
    expect(libroCocinitas.size()).toBe(initialSize);
  });

  test("deberia filtrar las recetas y devolver un nuevo CookBook", () => {
    const filteredCookBook = libroCocinitas.filter(item => item.time() >= 100);
    expect(filteredCookBook.size()).toBe(1);
    expect(filteredCookBook.get(0)).toBe(applePie);
  });

  test("deberia calcular el tiempo promedio de preparacion de las recetas", () => {
    expect(libroCocinitas.avgTime()).toBe(225); 
  });

  test("deberia retornar 0 como tiempo promedio si el recetario esta vacio", () => {
    const emptyCookBook = new CookBook<Salty | Sweet>();
    expect(emptyCookBook.avgTime()).toBe(0);
  }); 


})