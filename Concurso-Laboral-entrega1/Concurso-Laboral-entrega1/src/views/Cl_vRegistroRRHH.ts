import I_vRegistroRRHH from "../interfaces/I_vRegistroRRHH.js";

export default class Cl_vRegistroRRHH implements I_vRegistroRRHH {
  constructor() {
    
  }

  
  public onAgregar(callback: () => void): void {
    const btnAgregar = document.getElementById("registro_btAgregar");
    if (btnAgregar) {
      btnAgregar.onclick = (e) => {
        e.preventDefault(); 
        callback();
      };
    }
  }

  public onVolver(callback: () => void): void {
    const btnVolver = document.getElementById("registro_btVolver");
    if (btnVolver) {
      btnVolver.onclick = () => callback();
    }
  }

  
  get cedula(): number {
    const input = document.getElementById("registro_inCedula") as HTMLInputElement;
    return input ? parseInt(input.value) || 0 : 0;
  }

  get nombre(): string {
    const input = document.getElementById("registro_inNombre") as HTMLInputElement;
    return input ? input.value.trim() : "";
  }

  
  get puntajesForm5(): number[] {
    return [
      parseFloat((document.getElementById("f5_in1") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f5_in2") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f5_in3") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f5_in4") as HTMLInputElement)?.value) || 0
    ];
  }

  get puntajesForm51(): number[] {
    return [
      parseFloat((document.getElementById("f51_in1") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in2") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in3") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in4") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in5") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in6") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f51_in7") as HTMLInputElement)?.value) || 0
    ];
  }

  get puntajesForm52(): number[] {
    return [
      parseFloat((document.getElementById("f52_in1") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in2") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in3") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in4") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in5") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in6") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in7") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in8") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f52_in9") as HTMLInputElement)?.value) || 0
    ];
  }

  get puntajesForm53(): number[] {
    return [
      parseFloat((document.getElementById("f53_in1") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in2") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in3") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in4") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in5") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in6") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in7") as HTMLInputElement)?.value) || 0,
      parseFloat((document.getElementById("f53_in8") as HTMLInputElement)?.value) || 0
    ];
  }

  public mostrar(): void {
    const ui = document.getElementById("registroRRHH");
    if (ui) ui.removeAttribute("hidden");
  }

  public ocultar(): void {
    const ui = document.getElementById("registroRRHH");
    if (ui) ui.setAttribute("hidden", "true");
  }

  public mostrarMensajeExito(nombre: string): void {
    alert(`¡Éxito! El postulante "${nombre}" ha sido registrado correctamente en la nube empresarial.`);
    this.limpiarInputs();
  }

  public limpiarInputs(): void {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      if (input.type === "number" || input.type === "text") {
        input.value = "";
      }
    });
  }
}