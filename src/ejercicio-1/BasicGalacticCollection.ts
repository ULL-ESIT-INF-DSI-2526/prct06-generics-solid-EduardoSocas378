import { GalacticRegistry } from "./GalacticRegistry";
import { SearchByName } from "./interfaces";

/**
 * BasicGalacticCollection es una clase abstracta que implementa la interfaz GalacticRegistry y SearchByName.
 * Proporciona una implementación básica para agregar, eliminar y obtener elementos de la colección.
 * Además, define un método abstracto searchByName que debe ser implementado por las clases concretas.
 * Esto permite que cada tipo de colección tenga su propia lógica de búsqueda específica, manteniendo la flexibilidad y la adherencia al principio de responsabilidad única.
 * @class BasicGalacticCollection
 * @template T - El tipo de elementos que se almacenarán en la colección.
 * @implements {GalacticRegistry<T>}
 * @implements {SearchByName<T>}
 * @abstract - Esta clase es abstracta y no puede ser instanciada directamente. Debe ser extendida por clases concretas que implementen el método searchByName.
 */
export abstract class BasicGalacticCollection<T> implements GalacticRegistry<T>, SearchByName<T> {
    protected items: T[] = [];

    /**
     * Agrega un elemento a la colección.
     * @param {T} item - El elemento a agregar.
     * @return {void}
     */
    add(item: T): void {
        this.items.push(item);
    }

    /**
     * Elimina un elemento de la colección.
     * @param {T} item - El elemento a eliminar de la colección.
     * @return {void}
     * @throws {Error} Si el elemento no existe en la colección, se lanza un error indicando que no se puede eliminar.
     */
    remove(item: T): void {
    const index = this.items.indexOf(item);
    
    if (index !== -1) {
      // Si lo encuentra, lo borra
        this.items.splice(index, 1);
      } else {
      // Si NO lo encuentra (index es -1), lanzamos un error ruidoso
        throw new Error("No se puede eliminar: el elemento no existe en el registro galáctico.");
      }
    }
    
    /**
     * Obtiene todos los elementos de la colección.
     * @returns {T[]} - Un array con todos los elementos de la colección.
     */
    getAll(): T[] {
        return this.items;
    }

    abstract searchByName(name: string): T[];
}