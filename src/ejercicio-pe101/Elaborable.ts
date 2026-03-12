
/**
 * Interfaz genérica que establece el contrato que deben cumplir todas las recetas que puedan
 * almacenarse en la aplicación. 
 * @template T - tipo de dato que retornara el tipo de receta
 */
export interface Elaborable <T> {
  /**
   * Obtiene la informacion descriptiva de la receta
   * @returns {T} retorna el tipo de objeto 
   */
  desc(): T;
  /**
   * Obtiene el tiempo estimado que tardaremos en realizar la receta en cuestion
   * @returns {number}
   */
  time(): number;
}