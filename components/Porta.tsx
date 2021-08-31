import {Area, Portal, Numero, PortaDiv, Soleira, Macaneta} from "../styles/Porta";
import PortaModel from "../model/PortaModel";

interface PortaProps {
    porta: PortaModel,
}

export default function Porta(props: PortaProps) {

    const {numero, possuiPresente, selecionada, aberta} = props.porta;

    return (
        <Area>
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