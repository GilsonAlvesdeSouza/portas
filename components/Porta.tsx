import {Area, Portal, Numero, PortaDiv, Soleira, Macaneta} from "../styles/Porta";
import PortaModel from "../model/PortaModel";

interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {

    const porta = props.value;
    const {numero, possuiPresente, selecionada, aberta} = porta;

    const alternarSelecao = (event) => props.onChange(porta.alternarSelecao());

    return (
        <Area onClick={alternarSelecao}>
            <Portal selecionada={selecionada}>
                <PortaDiv>
                    <Numero selecionada={selecionada}>{numero}</Numero>
                    <Macaneta selecionada={selecionada}/>
                </PortaDiv>
            </Portal>
            <Soleira/>
        </Area>
    );
}