/**
 * Interfaz genérica que establece el contrato para cualquier entrenamiento registrable.
 * @template T - El tipo de dato que retornará el resumen del entrenamiento.
 */
export interface Registrable<T> {
  /**
   * Obtiene la información descriptiva del entrenamiento.
   * @returns {T} El resumen del entrenamiento en el formato especificado.
   */
  summary(): T;

  /**
   * Obtiene las calorías estimadas quemadas durante el entrenamiento.
   * @returns {number} Las calorías totales quemadas.
   */
  calories(): number;
}