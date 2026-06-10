import Cl_mAspirante from "../models/Cl_mAspirante.js";
import mockapi from "../views/Cl_sMockApi.js";

export default class Cl_sAspirante {
  static async existe(
    cedula: number,
  ): Promise<{ ok: boolean; existe: boolean }> {
    // Enviamos únicamente el id numérico
    return await mockapi.existeId({ id: cedula });
  }

  static async agregar(
    nuevoAspirante: Cl_mAspirante,
  ): Promise<{ ok: boolean; mensaje: string }> {
    const datosJSON = nuevoAspirante.toJSON();
    return await mockapi.post(datosJSON);
  }

  static async getAspirantes(): Promise<{
    ok: boolean;
    tabla: Cl_mAspirante[];
  }> {
    return await mockapi.getTabla();
  }

  static async buscarPorCedula(
    cedula: number,
  ): Promise<{ ok: boolean; aspirante: Cl_mAspirante | null }> {
    let resultado = await mockapi.buscarPorCedula({ id: cedula });

    if (resultado.ok && resultado.data !== null) {
      let aspiranteInstanciado = new Cl_mAspirante({
        cedula: resultado.data.cedula,
        nombre: resultado.data.nombre,
        puntajesForm5: resultado.data.puntajesForm5,
        puntajesForm51: resultado.data.puntajesForm51,
        puntajesForm52: resultado.data.puntajesForm52,
        puntajesForm53: resultado.data.puntajesForm53,
        notaExamenEscrito: resultado.data.notaExamenEscrito,
        notaExamenPractico: resultado.data.notaExamenPractico,
        evaluacionAspectosJuradoA: resultado.data.evaluacionAspectosJuradoA,
        evaluacionAspectosJuradoB: resultado.data.evaluacionAspectosJuradoB,
        evaluacionAspectosJuradoC: resultado.data.evaluacionAspectosJuradoC,
      });

      // Adjuntamos el identificador único de internet
      (aspiranteInstanciado as any).idMockApi = resultado.data.id;

      return { ok: true, aspirante: aspiranteInstanciado };
    }

    return { ok: resultado.ok, aspirante: null };
  }

  /**
   * Envía la actualización de notas del jurado utilizando el ID de MockAPI
   */
  static async actualizar(
    aspirante: Cl_mAspirante,
  ): Promise<{ ok: boolean; mensaje: string }> {
    const idMockApi = (aspirante as any).idMockApi;
    if (!idMockApi) {
      return {
        ok: false,
        mensaje:
          "Error: No se pudo localizar el identificador del registro remoto.",
      };
    }
    return await mockapi.put(idMockApi, aspirante.toJSON());
  }
}
