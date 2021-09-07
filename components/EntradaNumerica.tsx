import {BotaoDecremento, BotaoIncremento, Container, Text, Value} from "../styles/EntradaNumerica";
import {Botoes} from "../styles/Jogo";

interface EntradaNumericaProps {
    text: string,
    value: number,
    onChange?: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericaProps) {
    const {text, value, onChange} = props

    const decremento = () => onChange(value - 1);
    const incremento = () => onChange(value + 1);

    return (
        <Container>
            <Text>{text}</Text>
            <Value>{value}</Value>
            <Botoes>
                <BotaoDecremento onClick={decremento}>-</BotaoDecremento>
                <BotaoIncremento onClick={incremento}>+</BotaoIncremento>
            </Botoes>
        </Container>
    );
}