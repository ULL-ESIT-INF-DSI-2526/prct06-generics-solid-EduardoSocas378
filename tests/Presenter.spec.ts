import { describe, expect, test, vi } from "vitest";
import { ConsoleTablePresenter } from "../src/ejercicio-2/Presenter";

describe("ConsoleTablePresenter", () => {
  test("debería llamar a console.table con los datos proporcionados", () => {
    const presenter = new ConsoleTablePresenter<any>();
    const mockData = [{ id: "1", nombre: "Prueba" }];

    // Espiamos a console.table y evitamos que ensucie la terminal real
    const consoleSpy = vi.spyOn(console, "table").mockImplementation(() => {});

    // Actuamos
    presenter.show(mockData);

    // Comprobamos que el espía detectó la llamada con los datos exactos
    expect(consoleSpy).toHaveBeenCalledWith(mockData);

    // Limpiamos el espía
    consoleSpy.mockRestore();
  });
});