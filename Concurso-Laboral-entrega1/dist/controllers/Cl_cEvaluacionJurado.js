import Cl_sAspirante from "../services/Cl_sAspirante.js";
export default class Cl_cEvaluacionJurado {
    vista;
    volverCallback;
    // Guardamos temporalmente el aspirante que se está evaluando en memoria
    aspiranteActual = null;
    constructor({ vista, volverCallback, }) {
        this.vista = vista;
        this.volverCallback = volverCallback;
        this.vista.onBuscar(() => this.onBuscarClick());
        this.vista.onGuardarEvaluacion(() => this.onGuardarEvaluacionClick());
        this.vista.onVolver(() => this.onVolverClick());
        this.vista.mostrar();
    }
    //Busca al aspirante en MockAPI para verificar si puede ser evaluado
    async onBuscarClick() {
        const cedulaBusqueda = this.vista.cedula;
        if (cedulaBusqueda <= 0) {
            alert("Por favor, ingrese una cédula válida para buscar.");
            return;
        }
        // Buscamos el registro completo en el servidor
        let resultado = await Cl_sAspirante.buscarPorCedula(cedulaBusqueda);
        if (resultado.ok === false) {
            alert("Error: No se pudo conectar con el servidor.");
            return;
        }
        if (resultado.aspirante === null) {
            alert("El aspirante no se encuentra registrado en el sistema de RRHH. Debe registrarlo en la Pantalla 1 primero.");
            return;
        }
        // Si existe, lo cargamos en memoria y abrimos los campos del jurado en la vista
        this.aspiranteActual = resultado.aspirante;
        alert(`Aspirante localizado: ${this.aspiranteActual.nombre}. Proceda a cargar las evaluaciones.`);
        this.vista.activarFormularioEvaluacion();
    }
    async onGuardarEvaluacionClick() {
        if (this.aspiranteActual === null) {
            alert("Error crítico: No hay ningún aspirante seleccionado para evaluar.");
            return;
        }
        const notasA = this.vista.evaluacionAspectosJuradoA;
        const notasB = this.vista.evaluacionAspectosJuradoB;
        const notasC = this.vista.evaluacionAspectosJuradoC;
        // VALIDACIÓN CRÍTICA: Comprobamos si alguna nota de los jurados está fuera del rango 1-5
        const tieneErrorA = notasA.some(nota => nota < 1 || nota > 5);
        const tieneErrorB = notasB.some(nota => nota < 1 || nota > 5);
        const tieneErrorC = notasC.some(nota => nota < 1 || nota > 5);
        if (tieneErrorA || tieneErrorB || tieneErrorC) {
            alert("Error de rango: Las puntuaciones de la matriz de exposición de los jurados (A, B y C) deben estar estrictamente entre 1 y 5.");
            return;
        }
        this.aspiranteActual.notaExamenEscrito = this.vista.notaExamenEscrito;
        this.aspiranteActual.notaExamenPractico = this.vista.notaExamenPractico;
        this.aspiranteActual.evaluacionAspectosJuradoA = notasA;
        this.aspiranteActual.evaluacionAspectosJuradoB = notasB;
        this.aspiranteActual.evaluacionAspectosJuradoC = notasC;
        let resultadoUpdate = await Cl_sAspirante.actualizar(this.aspiranteActual);
        alert(resultadoUpdate.mensaje);
        if (resultadoUpdate.ok) {
            this.vista.limpiarInputs();
            this.aspiranteActual = null;
        }
    }
    onVolverClick() {
        this.vista.ocultar();
        this.volverCallback();
    }
}
//# sourceMappingURL=Cl_cEvaluacionJurado.js.map