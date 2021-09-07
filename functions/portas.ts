import PortaModel from "../model/PortaModel";

export function criarPortas(quantidade: number, selecionada: number): PortaModel[] {
    return Array.from({length: quantidade}, (_, index) => {
        const numero = index + 1;
        const possuiPresente = (numero === selecionada);
        return new PortaModel(numero, possuiPresente);
    });
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map((portaAtual) => {
        const modificada = (portaAtual.numero === portaModificada.numero);
        if (modificada) {
            return portaModificada;
        }
        return portaModificada.aberta ? portaAtual : portaAtual.desSelecionar();
    });
}