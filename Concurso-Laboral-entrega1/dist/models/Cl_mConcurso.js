import Cl_mAspirante from "./Cl_mAspirante.js";
export default class Cl_mConcurso {
    _aspirantes = [];
    constructor() {
        this._aspirantes = [];
    }
    agregar(aspirante) {
        this._aspirantes.push(aspirante);
    }
    /**
     * Transforma el arreglo de objetos planos que retorna MockAPI
     * en instancias operativas con métodos de TypeScript.
     */
    setAspirantes(arrayRaw) {
        this._aspirantes = [];
        arrayRaw.forEach((item) => {
            this._aspirantes.push(new Cl_mAspirante({
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
            }));
        });
    }
    getAspirantes() {
        return this._aspirantes;
    }
    obtenerResultadosFinales() {
        return this._aspirantes.filter((aspirante) => aspirante.obtenerVeredicto() === "Aprobado");
    }
    obtenerGanador() {
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
    esDesierto() {
        const aprobados = this.obtenerResultadosFinales();
        return aprobados.length === 0;
    }
}
//# sourceMappingURL=Cl_mConcurso.js.map