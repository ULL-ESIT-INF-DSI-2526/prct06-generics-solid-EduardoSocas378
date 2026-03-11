import { describe, expect, test, beforeEach } from "vitest";
import { TrainingLog } from "../src/ejercicio-3/TrainingLog";
import { Cardio } from "../src/ejercicio-3/Cardio";
import { Strength } from "../src/ejercicio-3/Strength";

describe("TrainingLog", () => {
  
  let log: TrainingLog<Cardio | Strength>;
  let run: Cardio;
  let benchPress: Strength;

  beforeEach(() => {
    log = new TrainingLog<Cardio | Strength>();
    
    run = new Cardio("Carrera Matutina", 5, 30, "carrera", 300);
    benchPress = new Strength("Press de Banca", 60, 4, 10, 50); // 4 series * 50 cal = 200 cal
    
    log.add(run);
    log.add(benchPress);
  });

  test("debería añadir y contar los entrenamientos correctamente", () => {
    expect(log.size()).toBe(2);
  });

  test("debería obtener un entrenamiento por su índice", () => {
    expect(log.get(0)).toBe(run);
    expect(log.get(1)).toBe(benchPress);
    expect(log.get(99)).toBeUndefined();
  });

  test("debería eliminar un entrenamiento por su índice", () => {
    log.remove(0);
    expect(log.size()).toBe(1);
    expect(log.get(0)).toBe(benchPress); // Como borramos el 0, el press de banca pasa a ser el 0
  });

  test("no debería hacer nada ni dar error si se intenta eliminar un índice fuera de rango", () => {
    const initialSize = log.size(); // Sabemos que empieza con 2 elementos

    // Intentamos borrar un índice negativo
    log.remove(-1);
    expect(log.size()).toBe(initialSize); // Sigue habiendo 2

    // Intentamos borrar un índice que no existe por arriba
    log.remove(99);
    expect(log.size()).toBe(initialSize); // Sigue habiendo 2
  });

  test("debería calcular el total de calorías quemadas", () => {
    expect(log.totalBurn()).toBe(500); // 300 + 200
  });

  test("debería retornar 0 calorías si el log está vacío", () => {
    const emptyLog = new TrainingLog<Cardio | Strength>();
    expect(emptyLog.totalBurn()).toBe(0);
  });

  test("debería filtrar los entrenamientos y devolver un nuevo TrainingLog", () => {
    const highBurnLog = log.filter(item => item.calories() >= 300);
    expect(highBurnLog.size()).toBe(1);
    expect(highBurnLog.get(0)).toBe(run);
  });
});