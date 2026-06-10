export default class Cl_vEvaluacionJurado {
    ui;
    inCedula;
    btBuscar;
    divFormularioNotas;
    // Notas de exámenes escritos y prácticos
    inExamenEscrito;
    inExamenPractico;
    btGuardar;
    btVolver;
    constructor() {
        this.ui = document.getElementById("evaluacionJurado");
        // Elementos de búsqueda
        this.inCedula = document.getElementById("evaluacion_inCedula");
        this.btBuscar = document.getElementById("evaluacion_btBuscar");
        // Formulario secundario de ingreso de notas
        this.divFormularioNotas = document.getElementById("evaluacion_divFormularioNotas");
        this.inExamenEscrito = document.getElementById("evaluacion_inExamenEscrito");
        this.inExamenPractico = document.getElementById("evaluacion_inExamenPractico");
        this.btGuardar = document.getElementById("evaluacion_btGuardar");
        this.btVolver = document.getElementById("evaluacion_btVolver");
    }
    get cedula() {
        return parseInt(this.inCedula.value.trim()) || 0;
    }
    get notaExamenEscrito() {
        return parseFloat(this.inExamenEscrito.value) || 0;
    }
    get notaExamenPractico() {
        return parseFloat(this.inExamenPractico.value) || 0;
    }
    get evaluacionAspectosJuradoA() {
        const arreglo = [];
        for (let i = 1; i <= 12; i++) {
            const input = document.getElementById(`ja_in${i}`);
            arreglo.push(parseFloat(input.value) || 0);
        }
        return arreglo;
    }
    get evaluacionAspectosJuradoB() {
        const arreglo = [];
        for (let i = 1; i <= 12; i++) {
            const input = document.getElementById(`jb_in${i}`);
            arreglo.push(parseFloat(input.value) || 0);
        }
        return arreglo;
    }
    get evaluacionAspectosJuradoC() {
        const arreglo = [];
        for (let i = 1; i <= 12; i++) {
            const input = document.getElementById(`jc_in${i}`);
            arreglo.push(parseFloat(input.value) || 0);
        }
        return arreglo;
    }
    onBuscar(callback) {
        this.btBuscar.onclick = () => callback();
    }
    onGuardarEvaluacion(callback) {
        this.btGuardar.onclick = () => callback();
    }
    onVolver(callback) {
        this.btVolver.onclick = () => callback();
    }
    mostrar() {
        this.ui.removeAttribute("hidden");
        // Al entrar a la pantalla, el formulario de notas empieza oculto hasta que se busque la cédula
        this.divFormularioNotas.setAttribute("hidden", "true");
    }
    ocultar() {
        this.ui.setAttribute("hidden", "true");
    }
    activarFormularioEvaluacion() {
        this.divFormularioNotas.removeAttribute("hidden");
    }
    limpiarInputs() {
        this.inCedula.value = "";
        this.inExamenEscrito.value = "";
        this.inExamenPractico.value = "";
        // Limpiamos dinámicamente todas las casillas numéricas de la sección de notas
        const todosLosInputsDeNotas = this.divFormularioNotas.querySelectorAll("input[type='number']");
        todosLosInputsDeNotas.forEach((input) => {
            input.value = "";
        });
        this.divFormularioNotas.setAttribute("hidden", "true");
    }
}
//# sourceMappingURL=Cl_vEvaluacionJurado.js.map