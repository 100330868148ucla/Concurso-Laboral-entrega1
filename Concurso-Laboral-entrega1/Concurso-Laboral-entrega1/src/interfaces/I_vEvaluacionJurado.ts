export default interface I_vEvaluacionJurado {
  
  get cedula(): number;

  // Notas de exámenes
  get notaExamenEscrito(): number;
  get notaExamenPractico(): number;

  // Los 3 arreglos con los 12 aspectos de exposición evaluados por cada jurado
  get evaluacionAspectosJuradoA(): number[];
  get evaluacionAspectosJuradoB(): number[];
  get evaluacionAspectosJuradoC(): number[];

  
  onBuscar(callback: () => void): void;
  onGuardarEvaluacion(callback: () => void): void;
  onVolver(callback: () => void): void;

  
  mostrar(): void;
  ocultar(): void;
  limpiarInputs(): void;
  activarFormularioEvaluacion(): void; // Muestra los campos del jurado tras hallar la cédula
}