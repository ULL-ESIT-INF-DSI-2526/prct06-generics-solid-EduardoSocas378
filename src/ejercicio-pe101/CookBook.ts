import { Elaborable } from "./Elaborable";

/**
 * Clase genérica que gestiona un libro de recetas
 * @Template T - tipo de receta que implementa la interfaz Elaborable
 */

export class CookBook<T extends Elaborable<unknown>>{
  private readonly items: T[] = [];

  /**
   * Añade una nueva receta al recetario
   * @param item - Receta a añadir
   */
  add(item: T): void{
    this.items.push(item);
  }

  /**
   * Elimina una receta dado su índice
   * @param index - La posicion de la receta a eliminar
   */
  remove(index:number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Obtiene la receta por su indice
   * @param index 
   * @returns {T | undefined} - La receta o undefined si el indice no existe
   */
  get(index: number): T | undefined {
    return this.items[index];
  }

  /**
   * Obtiene la cantidad de recetas registradas
   * @returns {number} - El numero de recetas que contiene el recetario
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Filtra las recetas según un predicado lógico
   * @param predicate - Función que evalúa si una receta debe añadirse
   * @returns {CookBook<T>} Un nuevo CookBook con las recestas filtradas.
   */
  filter(predicate: (item: T) => boolean): CookBook<T> {
    const filteredCookBook = new CookBook<T>();
    this.items.filter(predicate).forEach(item => filteredCookBook.add(item));
    return filteredCookBook;
  }

  /**
   * Calcula el total de tiempo de preparacion de todas las recetas
   * @returns {number} la suma total de tiempo en minutos, o 0 si no hay recetas
   */
  avgTime(): number {
    return this.items.reduce((total,item) => total + item.time(), 0)
  }

}