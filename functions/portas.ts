import PortaModel from "../model/PortaModel";

export function criarPortas(quantidade: number, selecionada: number): PortaModel[] {
    return Array.from({length: quantidade}, (_, index) => {
        const numero = index + 1;
        const temPresent = (numero === selecionada);
        return new PortaModel(numero, temPresent);
    });
}