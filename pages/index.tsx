import Cartao from "../components/Cartao";
import {Button, Container, Titulo} from "../styles/Formulario";
import Link from "next/link";

export default function Formulario() {

    return (
        <Container>
            <div>
                <Cartao backgroundColor='#c0392c'>
                    <Titulo>Monty Hall</Titulo>
                </Cartao>
                <Cartao/>
            </div>
            <div>
                <Cartao/>
                <Cartao backgroundColor='#28a085'>
                    <Link href={`/jogo/3/2`}>
                        <Button>Iniciar</Button>
                    </Link>
                </Cartao>
            </div>
        </Container>
    )
}
