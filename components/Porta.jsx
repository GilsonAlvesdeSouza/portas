import {Area, Portal, Numero, PortaDiv, Soleira, Macaneta} from "../styles/Porta";

export default function Porta(props) {

    const {selecionada} = props;

    return (
        <Area>
            <Portal selecionada={selecionada}>
                <PortaDiv>
                    <Numero selecionada={selecionada}>3</Numero>
                    <Macaneta selecionada={selecionada}/>
                </PortaDiv>
            </Portal>
            <Soleira/>
        </Area>
    );
}