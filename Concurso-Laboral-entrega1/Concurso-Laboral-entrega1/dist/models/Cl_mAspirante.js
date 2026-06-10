import { Cl_mMaximos } from "./Cl_mMaximos.js";
export default class Cl_mAspirante {
    tabla = "aspirantes";
    _cedula = 0;
    _nombre = "";
    _puntajesForm5 = Array(Cl_mMaximos.tamanoForm5).fill(0);
    _puntajesForm51 = Array(Cl_mMaximos.tamanoForm51).fill(0);
    _puntajesForm52 = Array(Cl_mMaximos.tamanoForm52).fill(0);
    _puntajesForm53 = Array(Cl_mMaximos.tamanoForm53).fill(0);
    _notaExamenEscrito = 0;
    _notaExamenPractico = 0;
    _evaluacionAspectosJuradoA = Array(Cl_mMaximos.tamanoJurado).fill(0);
    _evaluacionAspectosJuradoB = Array(Cl_mMaximos.tamanoJurado).fill(0);
    _evaluacionAspectosJuradoC = Array(Cl_mMaximos.tamanoJurado).fill(0);
    constructor({ cedula, nombre, puntajesForm5 = Array(Cl_mMaximos.tamanoForm5).fill(0), puntajesForm51 = Array(Cl_mMaximos.tamanoForm51).fill(0), puntajesForm52 = Array(Cl_mMaximos.tamanoForm52).fill(0), puntajesForm53 = Array(Cl_mMaximos.tamanoForm53).fill(0), notaExamenEscrito = 0, notaExamenPractico = 0, evaluacionAspectosJuradoA = Array(Cl_mMaximos.tamanoJurado).fill(0), evaluacionAspectosJuradoB = Array(Cl_mMaximos.tamanoJurado).fill(0), evaluacionAspectosJuradoC = Array(Cl_mMaximos.tamanoJurado).fill(0), }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.puntajesForm5 = puntajesForm5;
        this.puntajesForm51 = puntajesForm51;
        this.puntajesForm52 = puntajesForm52;
        this.puntajesForm53 = puntajesForm53;
        this.notaExamenEscrito = notaExamenEscrito;
        this.notaExamenPractico = notaExamenPractico;
        this.evaluacionAspectosJuradoA = evaluacionAspectosJuradoA;
        this.evaluacionAspectosJuradoB = evaluacionAspectosJuradoB;
        this.evaluacionAspectosJuradoC = evaluacionAspectosJuradoC;
    }
    get cedula() { return this._cedula; }
    set cedula(value) { this._cedula = +value; }
    get nombre() { return this._nombre; }
    set nombre(value) { this._nombre = value.trim(); }
    get puntajesForm5() { return this._puntajesForm5; }
    set puntajesForm5(v) { this._puntajesForm5 = v; }
    get puntajesForm51() { return this._puntajesForm51; }
    set puntajesForm51(v) { this._puntajesForm51 = v; }
    get puntajesForm52() { return this._puntajesForm52; }
    set puntajesForm52(v) { this._puntajesForm52 = v; }
    get puntajesForm53() { return this._puntajesForm53; }
    set puntajesForm53(v) { this._puntajesForm53 = v; }
    get notaExamenEscrito() { return this._notaExamenEscrito; }
    set notaExamenEscrito(v) { this._notaExamenEscrito = +v; }
    get notaExamenPractico() { return this._notaExamenPractico; }
    set notaExamenPractico(v) { this._notaExamenPractico = +v; }
    get evaluacionAspectosJuradoA() { return this._evaluacionAspectosJuradoA; }
    set evaluacionAspectosJuradoA(v) { this._evaluacionAspectosJuradoA = v; }
    get evaluacionAspectosJuradoB() { return this._evaluacionAspectosJuradoB; }
    set evaluacionAspectosJuradoB(v) { this._evaluacionAspectosJuradoB = v; }
    get evaluacionAspectosJuradoC() { return this._evaluacionAspectosJuradoC; }
    set evaluacionAspectosJuradoC(v) { this._evaluacionAspectosJuradoC = v; }
    // METODOS 
    puntosForm5() {
        const bold = this.puntajesForm5.reduce((acc, nota) => acc + nota, 0);
        return bold > Cl_mMaximos.topePuntajeForm5 ? Cl_mMaximos.topePuntajeForm5 : bold;
    }
    puntosForm51() {
        const bold = this.puntajesForm51.reduce((acc, nota) => acc + nota, 0);
        return bold > Cl_mMaximos.topePuntajeForm51 ? Cl_mMaximos.topePuntajeForm51 : bold;
    }
    puntosForm52() {
        const bold = this.puntajesForm52.reduce((acc, nota) => acc + nota, 0);
        return bold > Cl_mMaximos.topePuntajeForm52 ? Cl_mMaximos.topePuntajeForm52 : bold;
    }
    puntosForm53() {
        const bold = this.puntajesForm53.reduce((acc, nota) => acc + nota, 0);
        return bold > Cl_mMaximos.topePuntajeForm53 ? Cl_mMaximos.topePuntajeForm53 : bold;
    }
    // FORMULARIO 6 (sumatoria de los puntos de las credenciales )
    totalForm6Sobre100() {
        return this.puntosForm5() + this.puntosForm51() + this.puntosForm52() + this.puntosForm53();
    }
    calificacionFinalForm6() {
        return this.totalForm6Sobre100() / 5;
    }
    // FORMULARIO 7 (CALIFICACION DE LA CREDENCIAL BASE AL 10%)
    calificacion10PorcForm7() {
        return this.totalForm6Sobre100() * 0.10;
    }
    // FORMULARIO 8  (Examen escrito y practivo) maximo 40 pts
    calificacionForm8() {
        return this.notaExamenEscrito + this.notaExamenPractico;
    }
    //  luego llevamos al 60%
    calificacion60PorcForm8() {
        return (this.calificacionForm8() / 40) * 60;
    }
    // sumarotia de puntos evaluados por el jurado (maximo 180 pts)
    totalPuntosExposicion() {
        const sumA = this.evaluacionAspectosJuradoA.reduce((acc, val) => acc + val, 0);
        const sumB = this.evaluacionAspectosJuradoB.reduce((acc, val) => acc + val, 0);
        const sumC = this.evaluacionAspectosJuradoC.reduce((acc, val) => acc + val, 0);
        return sumA + sumB + sumC;
    }
    // formulario 9
    calificacionForm9() {
        return this.totalPuntosExposicion() / 9;
    }
    //Ponderación de Aptitudes (30%): 
    calificacion30PorcForm9() {
        return (this.calificacionForm9() / 20) * 30;
    }
    // NOTA DEFINITIVA  (maximo 100 pts)
    notaDefinitiva() {
        return this.calificacion10PorcForm7() + this.calificacion60PorcForm8() + this.calificacion30PorcForm9();
    }
    // VEREDICTO FINAL (llevado a 20pts)
    obtenerVeredicto() {
        if (this.calificacionForm8() < 15) {
            return "Improbado en Conocimiento";
        }
        const notaEscala20 = (this.notaDefinitiva() / 100) * 20;
        if (notaEscala20 < 16) {
            return "Improbado por Nota Mínima";
        }
        return "Aprobado";
    }
    toJSON() {
        return {
            tabla: this.tabla,
            cedula: this.cedula,
            nombre: this.nombre,
            puntajesForm5: this.puntajesForm5,
            puntajesForm51: this.puntajesForm51,
            puntajesForm52: this.puntajesForm52,
            puntajesForm53: this.puntajesForm53,
            notaExamenEscrito: this.notaExamenEscrito,
            notaExamenPractico: this.notaExamenPractico,
            evaluacionAspectosJuradoA: this.evaluacionAspectosJuradoA,
            evaluacionAspectosJuradoB: this.evaluacionAspectosJuradoB,
            evaluacionAspectosJuradoC: this.evaluacionAspectosJuradoC
        };
    }
}
//# sourceMappingURL=Cl_mAspirante.js.map