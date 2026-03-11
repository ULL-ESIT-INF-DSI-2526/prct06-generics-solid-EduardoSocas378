import { Receta } from "./RecipeInterfaces";

export class RecipeTimeEstimator {

  countSteps(recipe: Receta): number {
    return recipe.pasos.length;
  }

  estimateTime(recipe: Receta): number | {min: number, max: number} {
    let minTime = 0;
    let maxTime = 0;

    for (const paso of recipe.pasos) {
      if (!paso.opcional) {
        minTime += paso.duracion; 
      }
      maxTime += paso.duracion;
    }

    if (minTime === maxTime) {
      return minTime;
    } else {
      return { min: minTime, max: maxTime };
    }
  }
}