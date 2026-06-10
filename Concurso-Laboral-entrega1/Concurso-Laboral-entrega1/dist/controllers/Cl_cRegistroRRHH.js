import Cl_sAspirante from "../services/Cl_sAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cRegistroRRHH {
    modelo;
    vista;
    volverCallback;
    constructor(params) {
        this.modelo = params.modelo;
        this.vista = params.vista;
        this.volverCallback = params.volverCallback;
        this.vista.onAgregar(() => this.procesarRegistro());
        this.vista.onVolver(() => this.onVolverClick());
    }
    async procesarRegistro() {
        if (this.vista.cedula === 0 || this.vista.nombre === "") {
            alert("Por favor, ingrese obligatoriamente la Cédula y el Nombre del aspirante.");
            return;
        }
        try {
            const aspiranteModelo = new Cl_mAspirante({
                cedula: this.vista.cedula,
                nombre: this.vista.nombre,
                puntajesForm5: this.vista.puntajesForm5,
                puntajesForm51: this.vista.puntajesForm51,
                puntajesForm52: this.vista.puntajesForm52,
                puntajesForm53: this.vista.puntajesForm53,
                notaExamenEscrito: 0,
                notaExamenPractico: 0,
                evaluacionAspectosJuradoA: Array(12).fill(0),
                evaluacionAspectosJuradoB: Array(12).fill(0),
                evaluacionAspectosJuradoC: Array(12).fill(0)
            });
            const resultado = await Cl_sAspirante.agregar(aspiranteModelo);
            if (resultado.ok) {
                this.vista.mostrarMensajeExito(aspiranteModelo.nombre);
            }
            else {
                alert("Error al guardar: " + resultado.mensaje);
            }
        }
        catch (error) {
            console.error("Error al registrar en MockAPI:", error);
            alert("Hubo un percance de conexión al guardar los datos en la nube.");
        }
    }
    onVolverClick() {
        this.vista.ocultar();
        this.volverCallback();
    }
}
//# sourceMappingURL=Cl_cRegistroRRHH.js.map