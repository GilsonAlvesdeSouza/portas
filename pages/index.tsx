import Cartao from "../components/Cartao";
import {Button, CartaoBloco, Container, Titulo} from "../styles/Formulario";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import {useState} from "react";

export default function Formulario() {

    const [quantidadePortas, setQuantidadePortas] = useState(3);
    const [portaPremiada, setPortaPremiada] = useState(2);

    return (
        <Container>
            <CartaoBloco>
                <Cartao backgroundColor='#c0392c'>
                    <Titulo>Monty Hall</Titulo>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Quantidade de portas:" value={quantidadePortas}
                                     onChange={(novaQuantidade) => setQuantidadePortas(novaQuantidade)}/>
                </Cartao>
            </CartaoBloco>
            <CartaoBloco>
                <Cartao>
                    <EntradaNumerica text="Porta premiada:" value={portaPremiada}
                                     onChange={(numeroPortaPremiada) => setPortaPremiada(numeroPortaPremiada)}/>
                </Cartao>
                <Cartao backgroundColor='#28a085'>
                    <Link href={`/jogo/${quantidadePortas}/${portaPremiada}`}>
                        <Button>Iniciar</Button>
                    </Link>
                </Cartao>
            </CartaoBloco>
        </Container>
    )
}
