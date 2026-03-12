import { Elaborable } from "./Elaborable";

/**
 * Define la estructura de la descripcion para las recetas dulces
 */

export type SweetDesc = {
  name: string;
  difficulty: number;
};

/**
 * Clase que representa las recetas elaborables dulces
 * @implements {Elaborable<SweetDesc>} - Interfaz Registrable devolviendo un objeto SweetDesc.
 */
export class Sweet implements Elaborable<SweetDesc> {
  private readonly _name: string;
  private readonly _difficulty: number;
  private readonly _preparationTime: number;
  private readonly _bakingTime: number;
  private readonly _coolingTime: number;

  /**
   * Creamos una instancia de una receta dulce
   * @param name - Nombre de la receta
   * @param difficulty - Dificultad de la receta del 0 al 10
   * @param preparationTime - Tiempo de preparación de la receta.
   * @param bakingTime - Tiempo de horneado de la receta.
   * @param coolingTime - Tiempo de enfriamiento de la receta tras el horneado.
   */
  constructor(name: string, difficulty: number, preparationTime:number, bakingTime:number, coolingTime:number){
    if (difficulty < 0 || difficulty > 10) throw new Error("La dificultad debe ser un valor entre 0 y 10")
    if (preparationTime < 0) throw new Error ("El tiempo de preparacion no puede ser negativo");
    if (bakingTime < 0) throw new Error ("El tiempo de horneado no puede ser negativo");
    if (coolingTime < 0) throw new Error ("El tiempo de enfriamiento no puede ser negativo");

    this._name = name;
    this._difficulty = difficulty;
    this._preparationTime = preparationTime;
    this._bakingTime = bakingTime;
    this._coolingTime = coolingTime;
  }

  get name(): string {return this._name}
  get difficulty(): number {return this._difficulty}
  get preparationTime(): number {return this._preparationTime}
  get bakingTime():number {return this._bakingTime}
  get coolingTime():number {return this._coolingTime}

  /**
   * propiedad desc de Elaborable para la clase Sweet
   * @returns - objeto de tipo SweetDesc
   */
  desc(): SweetDesc {
    return {
      name: this.name,
      difficulty: this.difficulty
    };
  }

  /**
   * propiedad time de Elaborable para la clase Sweet
   * @returns - suma de todos los tiempos de los atributos de la clase Sweet
   */
  time(): number {
    return this.preparationTime + this.bakingTime + this.coolingTime;
  }
}