import {Area, Portal, Numero, PortaDiv, Soleira, Macaneta} from "../styles/Porta";
import PortaModel from "../model/PortaModel";
import Presente from "./Presente"

interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const {onChange} = props;
    const porta = props.value;
    const {numero, possuiPresente, selecionada, aberta} = porta;

    const alternarSelecao = (event) => onChange(porta.alternarSelecao());

    const abrir = (event) => {
        event.stopPropagation();
        onChange(porta.abrir());
    }

    function renderizarPorta() {
        return (
            <PortaDiv>
                <Numero selecionada={selecionada}>{numero}</Numero>
                <Macaneta selecionada={selecionada} onClick={abrir}/>
            </PortaDiv>
        );
    }

    return (
        <Area onClick={alternarSelecao}>
            <Portal selecionada={!aberta ? selecionada : false}>
                {porta.fechada ?
                    renderizarPorta() : porta.possuiPresente ? <Presente/> : false}
            </Portal>

            <Soleira/>
        </Area>
    );
}