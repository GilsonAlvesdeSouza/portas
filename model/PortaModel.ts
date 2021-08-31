export default class PortaModel {
    readonly #numero: number;
    readonly #possuiPresente: boolean;
    readonly #selecionada: boolean;
    readonly #aberta: boolean;

    constructor(numero: number, possuiPresente: boolean = false, selecionada: boolean = false, aberta: boolean = false) {
        this.#numero = numero;
        this.#possuiPresente = possuiPresente;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
    }

    get numero(): number {
        return this.#numero;
    }

    get possuiPresente(): boolean {
        return this.#possuiPresente;
    }

    get selecionada(): boolean {
        return this.#selecionada;
    }

    get aberta(): boolean {
        return this.#aberta;
    }

    desSelecionar(): object {
        const selecionada = false;
        return new PortaModel(this.numero, this.possuiPresente, selecionada, this.aberta);
    }

    alternarSelecao(): object {
        const selecionada = !this.selecionada;
        return new PortaModel(this.numero, this.possuiPresente, selecionada, this.aberta);
    }

    abrir(): object {
        const aberta = true;
        return new PortaModel(this.numero, this.possuiPresente, this.selecionada, aberta);
    }
}