import {useState} from "react";
import {atualizarPortas, criarPortas} from "../functions/portas";
import Porta from "../components/Porta";
import {Botoes, Container, Portas, Btn} from '../styles/Jogo'
import Link from "next/link";

export default function Jogo() {
    const [portas, setPortas] = useState(criarPortas(20, 5));

    const renderizarPortas = () => {
        return portas.map((porta) => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
                setPortas(atualizarPortas(portas, novaPorta));
            }}/>
        });
    };

    return (
        <Container>
            <Portas>
                {renderizarPortas()}
            </Portas>
            <Botoes>
                <Link href="/">
                    <Btn>Voltar</Btn>
                </Link>
            </Botoes>
        </Container>
    )
}