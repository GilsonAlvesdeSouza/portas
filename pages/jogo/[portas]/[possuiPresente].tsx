import {useEffect, useState} from "react";
import {atualizarPortas, criarPortas} from "../../../functions/portas";
import Porta from "../../../components/Porta";
import {Botoes, Container, Portas, Btn} from "../../../styles/Jogo"
import Link from "next/link";
import {useRouter} from "next/router";

export default function PossuiPresente() {

    const router = useRouter();
    const [portas, setPortas] = useState([]);

    useEffect(() => {
        const quantidadePortas = +router.query.portas;
        const portaPremiada = +router.query.possuiPresente;
        setPortas(criarPortas(quantidadePortas, portaPremiada));
    }, [router]);

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