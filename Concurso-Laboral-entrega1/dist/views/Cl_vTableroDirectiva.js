export default class Cl_vTableroDirectiva {
    ui;
    tblRegistros;
    cardGanador;
    btRecargar;
    btVolver;
    constructor() {
        this.ui = document.getElementById("tableroDirectiva");
        this.tblRegistros = document.getElementById("tablero_tblRegistros");
        this.cardGanador = document.getElementById("tablero_cardGanador");
        this.btRecargar = document.getElementById("tablero_btRecargar");
        this.btVolver = document.getElementById("tablero_btVolver");
    }
    onRecargar(callback) {
        this.btRecargar.onclick = () => callback();
    }
    onVolver(callback) {
        this.btVolver.onclick = () => callback();
    }
    mostrarResultados(aspirantes) {
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
            }
            else if (veredicto === "Improbado por Nota Mínima") {
                claseColor = "text-danger fw-bold";
                veredictoFinalHTML = `Improbado por Nota Mínima (${nota20.toFixed(2)} / 20 pts)`;
            }
            else {
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
    mostrarGanador(ganador) {
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
    mostrar() {
        this.ui.removeAttribute("hidden");
    }
    ocultar() {
        this.ui.setAttribute("hidden", "true");
    }
}
//# sourceMappingURL=Cl_vTableroDirectiva.js.map