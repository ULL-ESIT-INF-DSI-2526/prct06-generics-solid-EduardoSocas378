import { Registrable } from "./Registrable";

/**
 * Tipos de actividades de cardio permitidas.
 */
export type CardioActivity = "carrera" | "ciclismo" | "natación" | "remo" | "otro";

/**
 * Clase que representa un entrenamiento cardiovascular.
 * Implementa la interfaz Registrable devolviendo un string en su resumen.
 */
export class Cardio implements Registrable<string> {
  private readonly _name: string;
  private readonly _distance: number;
  private readonly _duration: number;
  private readonly _activityType: CardioActivity;
  private readonly _burnedCalories: number;

  /**
   * Crea una instancia de un entrenamiento de Cardio.
   * @param name - Nombre del entrenamiento.
   * @param distance - Distancia recorrida en kilómetros (debe ser mayor o igual a 0).
   * @param duration - Duración en minutos (debe ser mayor a 0).
   * @param activityType - Tipo de actividad realizada.
   * @param burnedCalories - Calorías quemadas estimadas (debe ser mayor o igual a 0).
   * @throws {Error} Si algún parámetro numérico no cumple las validaciones.
   */
  constructor(name: string, distance: number, duration: number, activityType: CardioActivity, burnedCalories: number) {
    if (distance < 0) throw new Error("La distancia no puede ser negativa.");
    if (duration <= 0) throw new Error("La duración debe ser mayor que cero.");
    if (burnedCalories < 0) throw new Error("Las calorías quemadas no pueden ser negativas.");

    this._name = name;
    this._distance = distance;
    this._duration = duration;
    this._activityType = activityType;
    this._burnedCalories = burnedCalories;
  }

  get name(): string { return this._name; }
  get distance(): number { return this._distance; }
  get duration(): number { return this._duration; }
  get activityType(): CardioActivity { return this._activityType; }

  summary(): string {
    return `${this.name} (${this.activityType}): ${this.distance} km en ${this.duration} min.`;
  }

  calories(): number {
    return this._burnedCalories;
  }
}