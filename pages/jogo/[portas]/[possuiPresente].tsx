import {useEffect, useState} from "react";
import {atualizarPortas, criarPortas} from "../../../functions/portas";
import Porta from "../../../components/Porta";
import {Botoes, Container, Portas, Btn} from "../../../styles/Jogo"
import Link from "next/link";
import {useRouter} from "next/router";

export default function PossuiPresente() {

    const router = useRouter();
    const [portas, setPortas] = useState([]);
    const [valido, setValido] = useState(false);

    useEffect(() => {
        const quantidadePortas = +router.query.portas;
        const portaPremiada = +router.query.possuiPresente;
        const quantidadePortasValida = (quantidadePortas >= 3 && quantidadePortas <= 100);
        const possuiPresenteValido = (portaPremiada >= 1 && portaPremiada <= quantidadePortas);

        setValido(quantidadePortasValida && possuiPresenteValido);
    }, [portas, router.query.portas, router.query.possuiPresente]);

    useEffect(() => {
        const quantidadePortas = +router.query.portas;
        const portaPremiada = +router.query.possuiPresente;
        setPortas(criarPortas(quantidadePortas, portaPremiada));
    }, [router]);

    const renderizarPortas = () => {
        if (!valido) {
            return <h2>Os valores informados não são validos!</h2>
        }
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
                <Link href="/" passHref>
                    <Btn>Voltar</Btn>
                </Link>
            </Botoes>
        </Container>
    )
}