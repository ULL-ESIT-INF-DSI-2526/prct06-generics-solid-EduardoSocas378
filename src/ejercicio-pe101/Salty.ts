import { Elaborable } from "./Elaborable";

/**
 * Tipos de platos Salados
 */
export type PlateType = "Principal" | "Entrante" | "Guarnicion" | "Salsa"

/**
 * Clase que representa una receta salada
 * @implements {Elaborable<string>} - Implementa la interfaz Elavorable devolviendo un string como descripción
 */
export class Salty implements Elaborable<string>{
  private readonly _name: string;
  private readonly _originCountry: string;
  private readonly _estimatedTime: number;
  private readonly _plateType: PlateType;

  /**
   * Crea una instancia de una receta salada
   * @param name - nombre de la receta
   * @param originCountry - Pais de origen de la receta
   * @param estimatedTime - Tiempo estimado de preparacion
   * @param plateType - Tipo de plato
   * @throws {Error} - Si el tiempo estimado no es un valor correcto
   */
  constructor(name:string, originCountry:string, estimatedTime:number, plateType:PlateType){
    if (estimatedTime <= 0) throw new Error("El tiempo estimado no puede ser 0 o negativo");

    this._name = name;
    this._originCountry = originCountry;
    this._estimatedTime = estimatedTime;
    this._plateType = plateType;
  }

  get name(): string {return this._name}
  get originCountry(): string {return this._originCountry}
  get estimatedTime(): Number {return this._estimatedTime}
  get plateType(): PlateType {return this._plateType}

  /**
   * Propiedad Desc de la clase Salty
   * @returns - Una cadena de texto que muestra las diferentes propiedas de la receta
   */
  desc(): string {
    return `La receta ${this.name}, originaria de ${this.originCountry} se prepara en un tiempo estimado de ${this.estimatedTime} minutos y se caracteriza por ser ${this.plateType}`;
  }

  /**
   * Propiedad time de la clase Salty
   * @returns - un valor numerico del tiempo en minutos que se tarda en preparar la receta
   */
  time(): number{
    return this._estimatedTime;
  }
}