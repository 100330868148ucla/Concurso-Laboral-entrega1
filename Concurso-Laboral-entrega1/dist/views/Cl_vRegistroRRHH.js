export default class Cl_vRegistroRRHH {
    constructor() {
    }
    onAgregar(callback) {
        const btnAgregar = document.getElementById("registro_btAgregar");
        if (btnAgregar) {
            btnAgregar.onclick = (e) => {
                e.preventDefault();
                callback();
            };
        }
    }
    onVolver(callback) {
        const btnVolver = document.getElementById("registro_btVolver");
        if (btnVolver) {
            btnVolver.onclick = () => callback();
        }
    }
    get cedula() {
        const input = document.getElementById("registro_inCedula");
        return input ? parseInt(input.value) || 0 : 0;
    }
    get nombre() {
        const input = document.getElementById("registro_inNombre");
        return input ? input.value.trim() : "";
    }
    get puntajesForm5() {
        return [
            parseFloat(document.getElementById("f5_in1")?.value) || 0,
            parseFloat(document.getElementById("f5_in2")?.value) || 0,
            parseFloat(document.getElementById("f5_in3")?.value) || 0,
            parseFloat(document.getElementById("f5_in4")?.value) || 0
        ];
    }
    get puntajesForm51() {
        return [
            parseFloat(document.getElementById("f51_in1")?.value) || 0,
            parseFloat(document.getElementById("f51_in2")?.value) || 0,
            parseFloat(document.getElementById("f51_in3")?.value) || 0,
            parseFloat(document.getElementById("f51_in4")?.value) || 0,
            parseFloat(document.getElementById("f51_in5")?.value) || 0,
            parseFloat(document.getElementById("f51_in6")?.value) || 0,
            parseFloat(document.getElementById("f51_in7")?.value) || 0
        ];
    }
    get puntajesForm52() {
        return [
            parseFloat(document.getElementById("f52_in1")?.value) || 0,
            parseFloat(document.getElementById("f52_in2")?.value) || 0,
            parseFloat(document.getElementById("f52_in3")?.value) || 0,
            parseFloat(document.getElementById("f52_in4")?.value) || 0,
            parseFloat(document.getElementById("f52_in5")?.value) || 0,
            parseFloat(document.getElementById("f52_in6")?.value) || 0,
            parseFloat(document.getElementById("f52_in7")?.value) || 0,
            parseFloat(document.getElementById("f52_in8")?.value) || 0,
            parseFloat(document.getElementById("f52_in9")?.value) || 0
        ];
    }
    get puntajesForm53() {
        return [
            parseFloat(document.getElementById("f53_in1")?.value) || 0,
            parseFloat(document.getElementById("f53_in2")?.value) || 0,
            parseFloat(document.getElementById("f53_in3")?.value) || 0,
            parseFloat(document.getElementById("f53_in4")?.value) || 0,
            parseFloat(document.getElementById("f53_in5")?.value) || 0,
            parseFloat(document.getElementById("f53_in6")?.value) || 0,
            parseFloat(document.getElementById("f53_in7")?.value) || 0,
            parseFloat(document.getElementById("f53_in8")?.value) || 0
        ];
    }
    mostrar() {
        const ui = document.getElementById("registroRRHH");
        if (ui)
            ui.removeAttribute("hidden");
    }
    ocultar() {
        const ui = document.getElementById("registroRRHH");
        if (ui)
            ui.setAttribute("hidden", "true");
    }
    mostrarMensajeExito(nombre) {
        alert(`¡Éxito! El postulante "${nombre}" ha sido registrado correctamente en la nube empresarial.`);
        this.limpiarInputs();
    }
    limpiarInputs() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.type === "number" || input.type === "text") {
                input.value = "";
            }
        });
    }
}
//# sourceMappingURL=Cl_vRegistroRRHH.js.map