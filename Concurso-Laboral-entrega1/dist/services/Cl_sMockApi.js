export default class Cl_sMockApi {
    static apiUrl = "https://6a1a01c3489e4715751aac01.mockapi.io/aspirantes";
    static async getTabla() {
        try {
            const respuesta = await fetch(this.apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (respuesta.status === 404) {
                return { ok: true, tabla: [] };
            }
            if (!respuesta.ok) {
                return { ok: false, tabla: [] };
            }
            const data = await respuesta.json();
            return { ok: true, tabla: data };
        }
        catch (error) {
            return { ok: false, tabla: [] };
        }
    }
    static async post(registro) {
        try {
            const respuesta = await fetch(this.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registro),
            });
            if (!respuesta.ok) {
                return { ok: false, mensaje: "Error al guardar el registro en el servidor" };
            }
            const data = await respuesta.json();
            return { ok: true, mensaje: "Registro guardado con ID: " + data.id };
        }
        catch (error) {
            return {
                ok: false,
                mensaje: "Error al guardar el registro: " + error.message,
            };
        }
    }
    /**
     * Verifica si la cédula ya existe haciendo un filtro numérico directo
     */
    static async existeId({ id }) {
        try {
            const respuesta = await fetch(`${this.apiUrl}?cedula=${id}`);
            if (respuesta.status === 404) {
                return { ok: true, existe: false };
            }
            if (!respuesta.ok) {
                return { ok: false, existe: false };
            }
            const data = await respuesta.json();
            return { ok: true, existe: data.length > 0 };
        }
        catch (error) {
            return { ok: false, existe: false };
        }
    }
    /**
     * Localiza el objeto completo filtrando directamente por la cédula
     */
    static async buscarPorCedula({ id }) {
        try {
            const respuesta = await fetch(`${this.apiUrl}?cedula=${id}`);
            if (respuesta.status === 404)
                return { ok: true, data: null };
            if (!respuesta.ok)
                return { ok: false, data: null };
            const data = await respuesta.json();
            return { ok: true, data: data.length > 0 ? data[0] : null };
        }
        catch (error) {
            return { ok: false, data: null };
        }
    }
    /**
     * Modifica las notas usando el ID físico asignado por MockAPI
     */
    static async put(idMockApi, registro) {
        try {
            const respuesta = await fetch(`${this.apiUrl}/${idMockApi}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registro),
            });
            if (!respuesta.ok) {
                return { ok: false, mensaje: "Error al actualizar las evaluaciones en el servidor." };
            }
            return { ok: true, mensaje: "¡Evaluaciones cargadas con éxito!" };
        }
        catch (error) {
            return { ok: false, mensaje: "Error de red al actualizar: " + error.message };
        }
    }
}
//# sourceMappingURL=Cl_sMockApi.js.map