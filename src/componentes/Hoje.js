import { useContext } from "react";
import styled from "styled-components";
import HojeLista from "./HojeLista";
import TokenContext from "../contextos/TokenContext";

export default function Hoje() {
    const { listaHabitosHoje } = useContext(TokenContext);

    function renderizarHabitosHoje() {
        if (listaHabitosHoje.length > 0) {
            return listaHabitosHoje.map(habito => {
                const { id, name, done, currentSequence, highestSequence } = habito;
                return (
                    <HojeLista
                        key={id}
                        id={id}
                        name={name}
                        done={done}
                        currentSequence={currentSequence}
                        highestSequence={highestSequence}
                    />
                )
            })
        }
    }
    const renderizarListaHabitosHoje = renderizarHabitosHoje()

    return (
        <HojeExibido>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
            {renderizarListaHabitosHoje}
        </HojeExibido>
    )
}

const HojeExibido = styled.main`
margin: 98px 15px 129px 15px;
h1 {
    margin-bottom: 3px;
    font-size: 23px;
    color: #126BA5;
}
p {
    color: #BABABA;
    margin-bottom: 28px;
}
`