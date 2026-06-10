import I_vTableroDirectiva from "../interfaces/I_vTableroDirectiva.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_vTableroDirectiva implements I_vTableroDirectiva {
  private ui: HTMLElement;
  private tblRegistros: HTMLTableSectionElement;
  private cardGanador: HTMLDivElement;
  private divEstadisticas: HTMLDivElement;

  private btRecargar: HTMLButtonElement;
  private btVolver: HTMLButtonElement;

  constructor() {
    this.ui = document.getElementById("tableroDirectiva") as HTMLElement;
    this.tblRegistros = document.getElementById("tablero_tblRegistros") as HTMLTableSectionElement;
    this.cardGanador = document.getElementById("tablero_cardGanador") as HTMLDivElement;
    this.divEstadisticas = document.getElementById("tablero_divEstadisticas") as HTMLDivElement;
    this.btRecargar = document.getElementById("tablero_btRecargar") as HTMLButtonElement;
    this.btVolver = document.getElementById("tablero_btVolver") as HTMLButtonElement;
  }

  public onRecargar(callback: () => void): void {
    this.btRecargar.onclick = () => callback();
  }

  public onVolver(callback: () => void): void {
    this.btVolver.onclick = () => callback();
  }

  
  public mostrarResultados(aspirantes: Cl_mAspirante[]): void {
    this.tblRegistros.innerHTML = "";

    if (aspirantes.length === 0) {
      this.tblRegistros.innerHTML = `<tr>
        <td colspan="7" class="text-center text-muted py-3">No hay postulantes registrados en el sistema.</td>
      </tr>`;
      return;
    }

    aspirantes.forEach((aspirante) => {
    
      const veredicto = aspirante.obtenerVeredicto();
      const nota100 = aspirante.notaDefinitiva(); 
      const nota20 = (nota100 / 100) * 20;

      const rrhh = aspirante.totalForm6Sobre100();
      const examenes = aspirante.calificacionForm8();
      const jurado = aspirante.totalPuntosExposicion();

      let veredictoFinalHTML = "";
      let claseColor = "";

      if (veredicto === "Aprobado") {
        claseColor = "text-success fw-bold";
        veredictoFinalHTML = `Aprobado (${nota20.toFixed(2)} / 20 pts)`;
      } else if (veredicto === "Improbado por Nota Mínima") {
        claseColor = "text-danger fw-bold";
        veredictoFinalHTML = `Improbado por Nota Mínima (${nota20.toFixed(2)} / 20 pts)`;
      } else {
        claseColor = "text-danger text-opacity-75 small fw-bold";
        veredictoFinalHTML = veredicto; 
      }

      this.tblRegistros.innerHTML += `
        <tr>
          <td class="fw-semibold">${aspirante.cedula}</td>
          <td class="text-start">${aspirante.nombre}</td>
          <td>${rrhh.toFixed(2)} / 100 pts</td>
          <td>${examenes.toFixed(2)} / 40 pts</td>
          <td>${jurado.toFixed(2)} / 180 pts</td>
          <td class="text-primary fw-bold">${nota100.toFixed(2)} pts</td>
          <td class="${claseColor}">${veredictoFinalHTML}</td>
        </tr>
      `;
    });
  }

  public mostrarEstadisticas(aprobados: number, reprobados: number): void {
    this.divEstadisticas.innerHTML = `
      <div style="margin: 20px 0; padding: 15px; border: 2px solid #000; border-radius: 0px;">
      <h5 style="text-align: center; margin-bottom: 15px; text-transform: uppercase;">Porcentaje total</h5>
      <div style="display: flex; gap: 20px; justify-content: center;">
        
        <div style="flex: 1; text-align: center; padding: 10px; border: 1px solid #000;">
          <h5 style="margin: 0; font-size: 0.9rem;">Aprobados</h5>
          <p style="font-size: 1.5rem; font-weight: bold; margin: 5px 0 0 0;">
            ${aprobados.toFixed(1)}%
          </p>
        </div>

        <div style="flex: 1; text-align: center; padding: 10px; border: 1px solid #000;">
          <h5 style="margin: 0; font-size: 0.9rem;">Reprobados</h5>
          <p style="font-size: 1.5rem; font-weight: bold; margin: 5px 0 0 0;">
            ${reprobados.toFixed(1)}%
          </p>
        </div>

      </div>
    </div>
    `;
  }

  public mostrarGanador(ganador: Cl_mAspirante | null): void {
    if (ganador === null) {
      this.cardGanador.innerHTML = `
        <div style="padding: 15px; background-color: #fff3cd; color: #664d03; border: 1px solid #ffecb5; border-radius: 4px; text-align: center; margin-bottom: 20px;">
          <strong style="font-size: 1.1em; display: block; margin-bottom: 4px;">⚠️ Concurso Declarado Desierto</strong>
          <span style="font-size: 0.9em;">Ningún participante logró superar las notas mínimas de corte institucionales.</span>
        </div>
      `;
      return;
    }

    this.cardGanador.innerHTML = `
      <div style="padding: 15px; background-color: #f8f9fa; border-left: 5px solid #198754; border-top: 1px solid #dee2e6; border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6; border-radius: 4px; margin-bottom: 25px; text-align: left;">
        <span style="color: #198754; font-size: 0.85em; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 5px;">
          🏆 Postulante Seleccionado (Ganador único)
        </span>
        <h3 style="margin: 0 0 5px 0; color: #212529; font-size: 1.4em; font-weight: bold;">
          ${ganador.nombre}
        </h3>
        <p style="margin: 0; color: #6c757d; font-size: 0.9em;">
          Cédula de Identidad: <strong style="color: #212529;">${ganador.cedula}</strong>
        </p>
      </div>
    `;
  }

  public mostrar(): void {
    this.ui.removeAttribute("hidden");
  }

  public ocultar(): void {
    this.ui.setAttribute("hidden", "true");
  }
}