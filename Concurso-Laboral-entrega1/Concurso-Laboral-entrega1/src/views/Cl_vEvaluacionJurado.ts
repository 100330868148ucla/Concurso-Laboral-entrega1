import I_vEvaluacionJurado from "../interfaces/I_vEvaluacionJurado.js";

export default class Cl_vEvaluacionJurado implements I_vEvaluacionJurado {
  
  private ui: HTMLElement;

  private inCedula: HTMLInputElement;
  private btBuscar: HTMLButtonElement;

  
  private divFormularioNotas: HTMLDivElement;

  // Notas de exámenes escritos y prácticos
  private inExamenEscrito: HTMLInputElement;
  private inExamenPractico: HTMLInputElement;

  private btGuardar: HTMLButtonElement;
  private btVolver: HTMLButtonElement;

  constructor() {
    this.ui = document.getElementById("evaluacionJurado") as HTMLElement;

    // Elementos de búsqueda
    this.inCedula = document.getElementById("evaluacion_inCedula") as HTMLInputElement;
    this.btBuscar = document.getElementById("evaluacion_btBuscar") as HTMLButtonElement;

    // Formulario secundario de ingreso de notas
    this.divFormularioNotas = document.getElementById("evaluacion_divFormularioNotas") as HTMLDivElement;
    this.inExamenEscrito = document.getElementById("evaluacion_inExamenEscrito") as HTMLInputElement;
    this.inExamenPractico = document.getElementById("evaluacion_inExamenPractico") as HTMLInputElement;

    this.btGuardar = document.getElementById("evaluacion_btGuardar") as HTMLButtonElement;
    this.btVolver = document.getElementById("evaluacion_btVolver") as HTMLButtonElement;
  }


  public get cedula(): number {
    return parseInt(this.inCedula.value.trim()) || 0;
  }

  public get notaExamenEscrito(): number {
    return parseFloat(this.inExamenEscrito.value) || 0;
  }

  public get notaExamenPractico(): number {
    return parseFloat(this.inExamenPractico.value) || 0;
  }

  
  public get evaluacionAspectosJuradoA(): number[] {
    const arreglo: number[] = [];
    for (let i = 1; i <= 12; i++) {
      const input = document.getElementById(`ja_in${i}`) as HTMLInputElement;
      arreglo.push(parseFloat(input.value) || 0);
    }
    return arreglo;
  }

  
  public get evaluacionAspectosJuradoB(): number[] {
    const arreglo: number[] = [];
    for (let i = 1; i <= 12; i++) {
      const input = document.getElementById(`jb_in${i}`) as HTMLInputElement;
      arreglo.push(parseFloat(input.value) || 0);
    }
    return arreglo;
  }

  public get evaluacionAspectosJuradoC(): number[] {
    const arreglo: number[] = [];
    for (let i = 1; i <= 12; i++) {
      const input = document.getElementById(`jc_in${i}`) as HTMLInputElement;
      arreglo.push(parseFloat(input.value) || 0);
    }
    return arreglo;
  }


  public onBuscar(callback: () => void): void {
    this.btBuscar.onclick = () => callback();
  }

  public onGuardarEvaluacion(callback: () => void): void {
    this.btGuardar.onclick = () => callback();
  }

  public onVolver(callback: () => void): void {
    this.btVolver.onclick = () => callback();
  }

  

  public mostrar(): void {
    this.ui.removeAttribute("hidden");
    // Al entrar a la pantalla, el formulario de notas empieza oculto hasta que se busque la cédula
    this.divFormularioNotas.setAttribute("hidden", "true"); 
  }

  public ocultar(): void {
    this.ui.setAttribute("hidden", "true");
  }

  public activarFormularioEvaluacion(): void {
    this.divFormularioNotas.removeAttribute("hidden");
  }

  public limpiarInputs(): void {
    this.inCedula.value = "";
    this.inExamenEscrito.value = "";
    this.inExamenPractico.value = "";

    // Limpiamos dinámicamente todas las casillas numéricas de la sección de notas
    const todosLosInputsDeNotas = this.divFormularioNotas.querySelectorAll("input[type='number']");
    todosLosInputsDeNotas.forEach((input) => {
      (input as HTMLInputElement).value = "";
    });

    this.divFormularioNotas.setAttribute("hidden", "true");
  }
}