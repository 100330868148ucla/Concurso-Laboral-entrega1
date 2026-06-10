import I_vTableroDirectiva from "../interfaces/I_vTableroDirectiva.js";
import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_sAspirante from "../services/Cl_sAspirante.js";

export default class Cl_cTableroDirectiva {
  private modelo: Cl_mConcurso;
  private vista: I_vTableroDirectiva;
  private volverCallback: () => void;

  constructor({
    modelo,
    vista,
    volverCallback,
  }: {
    modelo: Cl_mConcurso;
    vista: I_vTableroDirectiva;
    volverCallback: () => void;
  }) {
    this.modelo = modelo;
    this.vista = vista;
    this.volverCallback = volverCallback;

    this.vista.onRecargar(() => this.cargarResultadosDelTablero());
    this.vista.onVolver(() => this.onVolverClick());

    this.vista.mostrar();

    this.cargarResultadosDelTablero(); 
  }

  
  private async cargarResultadosDelTablero() {
    // Llamamos al servicio web para traer a todos los candidatos
    let resultado = await Cl_sAspirante.getAspirantes();
    
    if (resultado.ok === false) {
      alert("Error: No se pudo establecer conexión con MockAPI.");
      return;
    }

    // Cargamos los datos limpios en la clase contenedora del modelo
    this.modelo.setAspirantes(resultado.tabla);

    
    this.vista.mostrarResultados(this.modelo.getAspirantes());

    const ganadorDefinitivo = this.modelo.obtenerGanador();
    this.vista.mostrarGanador(ganadorDefinitivo);
  }

  private onVolverClick(): void {
    this.vista.ocultar();
    this.volverCallback();
  }
}