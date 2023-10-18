export default class conversor {
  constructor(entrada, btn, resultado) {
    this.entrada = entrada;
    this.btn = document.querySelector(btn);
    this.resultado = document.querySelector(resultado);

    this.addBtnEvent = this.addBtnEvent.bind(this);
    this.limpaDados = this.limpaDados.bind(this);
  }

  limpaDados() {
    let resultado = 0;
    let array = document.querySelector(this.entrada).value.split("").reverse();
    //Valida se tem 1 ou 0 no array, caso tenha é feito o calculo e demonstra o resultado
    if (array.every((x) => x === "1" || x === "0")) {
      array.forEach((item, index) => {
        resultado += item == "1" ? 1 * 2 ** index : 0 * 2 ** index;
      });
      this.resultado.innerText = `Resultado: ${resultado}`;
    } else {
      this.resultado.innerText = `Resultado: NAN`;
    }
  }
  addBtnEvent() {
    this.btn.addEventListener("click", this.limpaDados);
  }

  init() {
    this.addBtnEvent();
  }
}
