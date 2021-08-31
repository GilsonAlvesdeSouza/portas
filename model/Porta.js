export default class Porta {
    #numero;
    #possuiPresente;
    #selecionada;
    #aberta;

    constructor(numero, possuiPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#possuiPresente = possuiPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }


    get numero() {
        return this.#numero;
    }

    get possuiPresente() {
        return this.#possuiPresente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    desSelecionar() {
        const selecionada = false;
        return new Porta(this.numero, this.possuiPresente, selecionada, this.aberta);
    }

    alternarSelecao() {
        const selecionada = !this.selecionada;
        return new Porta(this.numero, this.possuiPresente, selecionada, this.aberta);
    }

    abrir() {
        const aberta = true;
        return new Porta(this.numero, this.possuiPresente, this.selecionada, aberta);
    }
}