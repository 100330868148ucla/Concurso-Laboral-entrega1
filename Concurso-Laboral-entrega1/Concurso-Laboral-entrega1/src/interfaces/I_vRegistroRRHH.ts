export default interface I_vRegistroRRHH {
  
  get cedula(): number;
  get nombre(): string;

  // Los 4 arreglos de méritos extraídos del formulario
  get puntajesForm5(): number[];
  get puntajesForm51(): number[];
  get puntajesForm52(): number[];
  get puntajesForm53(): number[];

  
  onAgregar(callback: () => void): void;
  onVolver(callback: () => void): void;


  mostrar(): void;
  ocultar(): void;
  limpiarInputs(): void;
}