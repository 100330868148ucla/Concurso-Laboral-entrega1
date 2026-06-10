import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default interface I_vTableroDirectiva {
  // Recibe la lista procesada por el modelo para renderizar el reporte
  mostrarResultados(aspirantes: Cl_mAspirante[]): void;
  
  // Recibe al ganador definitivo (o null si quedó desierto) para mostrarlo en una tarjeta
  mostrarGanador(ganador: Cl_mAspirante | null): void;

  mostrarEstadisticas(aprobados: number, reprobados: number): void;

  
  onRecargar(callback: () => void): void;
  onVolver(callback: () => void): void;

  mostrar(): void;
  ocultar(): void;
}