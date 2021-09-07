import {Container} from "../styles/Cartao";

interface CartaoProps {
    backgroundColor?: string,
    children?: any,
}

export default function Cartao(props: CartaoProps) {
    const {backgroundColor, children} = props;

    return (
        <Container backgroundColor={backgroundColor}>
            {children}
        </Container>
    );
}