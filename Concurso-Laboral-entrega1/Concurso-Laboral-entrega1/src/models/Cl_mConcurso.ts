import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
  private _aspirantes: Cl_mAspirante[] = [];

  constructor() {
    this._aspirantes = [];
  }

  public agregar(aspirante: Cl_mAspirante): void {
    this._aspirantes.push(aspirante);
  }

  /**
   * Transforma el arreglo de objetos planos que retorna MockAPI
   * en instancias operativas con métodos de TypeScript.
   */
  public setAspirantes(arrayRaw: any[]): void {
    this._aspirantes = [];
    arrayRaw.forEach((item) => {
      this._aspirantes.push(
        new Cl_mAspirante({
          cedula: item.cedula,
          nombre: item.nombre,
          puntajesForm5: item.puntajesForm5,
          puntajesForm51: item.puntajesForm51,
          puntajesForm52: item.puntajesForm52,
          puntajesForm53: item.puntajesForm53,
          notaExamenEscrito: item.notaExamenEscrito,
          notaExamenPractico: item.notaExamenPractico,
          evaluacionAspectosJuradoA: item.evaluacionAspectosJuradoA,
          evaluacionAspectosJuradoB: item.evaluacionAspectosJuradoB,
          evaluacionAspectosJuradoC: item.evaluacionAspectosJuradoC,
        })
      );
    });
  }

  public getAspirantes(): Cl_mAspirante[] {
    return this._aspirantes;
  }

  public obtenerResultadosFinales(): Cl_mAspirante[] {
    return this._aspirantes.filter(
      (aspirante) => aspirante.obtenerVeredicto() === "Aprobado"
    );
  }

  public obtenerGanador(): Cl_mAspirante | null {
    const aprobados = this.obtenerResultadosFinales();
    
    if (aprobados.length === 0) {
      return null;
    }

    let ganador = aprobados[0];
    for (let i = 1; i < aprobados.length; i++) {
      if (aprobados[i].notaDefinitiva() > ganador.notaDefinitiva()) {
        ganador = aprobados[i];
      }
    }
    return ganador;
  }

  public esDesierto(): boolean {
    const aprobados = this.obtenerResultadosFinales();
    return aprobados.length === 0;
  }
  public porcentajeAprobados(): number {
    if (this._aspirantes.length === 0) return 0;
    const aprobados = this._aspirantes.filter(
      (a) => (a.notaDefinitiva() / 100) * 20 >= 16
    );
    return (aprobados.length / this._aspirantes.length) * 100;
  }

  // Porcentaje de aspirantes reprobados
  public porcentajeReprobados(): number {
    if (this._aspirantes.length === 0) return 0;
    return 100 - this.porcentajeAprobados();
  }
}