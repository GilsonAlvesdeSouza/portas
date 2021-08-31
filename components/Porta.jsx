import {Area, Portal, Numero, PortaDiv, Soleira, Macaneta} from "../styles/Porta";

export default function Porta(props) {
    return (
        <Area>
            <Portal>
                <PortaDiv>
                    <Numero>3</Numero>
                    <Macaneta/>
                </PortaDiv>
            </Portal>
            <Soleira/>
        </Area>
    );
}