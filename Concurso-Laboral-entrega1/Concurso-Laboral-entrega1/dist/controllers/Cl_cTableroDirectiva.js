import Cl_sAspirante from "../services/Cl_sAspirante.js";
export default class Cl_cTableroDirectiva {
    modelo;
    vista;
    volverCallback;
    constructor({ modelo, vista, volverCallback, }) {
        this.modelo = modelo;
        this.vista = vista;
        this.volverCallback = volverCallback;
        this.vista.onRecargar(() => this.cargarResultadosDelTablero());
        this.vista.onVolver(() => this.onVolverClick());
        this.vista.mostrar();
        this.cargarResultadosDelTablero();
    }
    async cargarResultadosDelTablero() {
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
        const aprobados = this.modelo.porcentajeAprobados();
        const reprobados = this.modelo.porcentajeReprobados();
        this.vista.mostrarEstadisticas(aprobados, reprobados);
    }
    onVolverClick() {
        this.vista.ocultar();
        this.volverCallback();
    }
}
//# sourceMappingURL=Cl_cTableroDirectiva.js.map