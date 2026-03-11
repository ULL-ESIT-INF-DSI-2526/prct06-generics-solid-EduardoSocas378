import { Registrable } from "./Registrable";

/**
 * Clase genérica que gestiona un registro de entrenamientos.
 * @template T - Tipo de entrenamiento, debe implementar la interfaz Registrable.
 */
export class TrainingLog<T extends Registrable<unknown>> {
  private readonly items: T[] = [];

  /**
   * Añade un nuevo entrenamiento al registro.
   * @param item - El entrenamiento a añadir.
   */
  add(item: T): void {
    this.items.push(item);
  }

  /**
   * Elimina un entrenamiento del registro dado su índice.
   * @param index - La posición del entrenamiento a eliminar.
   */
  remove(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Obtiene un entrenamiento por su índice.
   * @param index - La posición del entrenamiento.
   * @returns {T | undefined} El entrenamiento, o undefined si el índice no existe.
   */
  get(index: number): T | undefined {
    return this.items[index];
  }

  /**
   * Obtiene la cantidad de entrenamientos registrados.
   * @returns {number} El número total de entrenamientos.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Filtra los entrenamientos según un predicado lógico.
   * @param predicate - Función que evalúa si un entrenamiento debe incluirse.
   * @returns {TrainingLog<T>} Un nuevo registro con los entrenamientos filtrados.
   */
  filter(predicate: (item: T) => boolean): TrainingLog<T> {
    const filteredLog = new TrainingLog<T>();
    this.items.filter(predicate).forEach(item => filteredLog.add(item));
    return filteredLog;
  }

  /**
   * Calcula el total de calorías quemadas en todos los entrenamientos.
   * @returns {number} La suma total de calorías, o 0 si está vacío.
   */
  totalBurn(): number {
    return this.items.reduce((total, item) => total + item.calories(), 0);
  }
}