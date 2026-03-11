import { Registrable } from "./Registrable";

/**
 * Define la estructura del resumen para un entrenamiento de fuerza.
 */
export type StrengthSummary = {
  nombre: string;
  peso: number;
};

/**
 * Clase que representa un entrenamiento de fuerza.
 * Implementa la interfaz Registrable devolviendo un objeto en su resumen.
 */
export class Strength implements Registrable<StrengthSummary> {
  private readonly _name: string;
  private readonly _weight: number;
  private readonly _sets: number;
  private readonly _reps: number;
  private readonly _caloriesPerSet: number;

  /**
   * Crea una instancia de un entrenamiento de Fuerza.
   * @param name - Nombre del ejercicio.
   * @param weight - Peso utilizado en kilogramos (debe ser mayor o igual a 0).
   * @param sets - Número de series realizadas (debe ser mayor a 0).
   * @param reps - Número de repeticiones por serie (debe ser mayor a 0).
   * @param caloriesPerSet - Calorías quemadas en cada serie (debe ser mayor o igual a 0).
   * @throws {Error} Si algún parámetro numérico no cumple las validaciones.
   */
  constructor(name: string, weight: number, sets: number, reps: number, caloriesPerSet: number) {
    if (weight < 0) throw new Error("El peso no puede ser negativo.");
    if (sets <= 0) throw new Error("El número de series debe ser mayor que cero.");
    if (reps <= 0) throw new Error("El número de repeticiones debe ser mayor que cero.");
    if (caloriesPerSet < 0) throw new Error("Las calorías por serie no pueden ser negativas.");

    this._name = name;
    this._weight = weight;
    this._sets = sets;
    this._reps = reps;
    this._caloriesPerSet = caloriesPerSet;
  }

  get name(): string { return this._name; }
  get weight(): number { return this._weight; }
  get sets(): number { return this._sets; }
  get reps(): number { return this._reps; }
  get caloriesPerSet(): number { return this._caloriesPerSet; }

  summary(): StrengthSummary {
    return {
      nombre: this.name,
      peso: this.weight
    };
  }

  calories(): number {
    return this.sets * this.caloriesPerSet;
  }
}