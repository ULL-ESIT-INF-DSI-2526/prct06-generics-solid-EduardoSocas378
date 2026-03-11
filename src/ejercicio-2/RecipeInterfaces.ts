export interface Paso {
  id: string;
  descripcion: string;
  duracion: number; 
  etiquetas: string[];
  opcional: boolean;
  vecesCompletado: number;
}

export interface Receta {
  id: string;
  nombre: string;
  añoPublicacion: number;
  pasos: Paso[];
}

export interface Recetario {
  id: string;
  nombre: string; 
  recetas: Receta[];
}

export interface Chef {
  id: string;
  nombre: string;
  seguidores: number;
  recetario: Recetario; 
}