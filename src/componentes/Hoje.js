import { useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import HojeLista from "./HojeLista";
import TokenContext from "../contextos/TokenContext";

export default function Hoje() {
    const { listaHabitosHoje } = useContext(TokenContext);

    require("dayjs/locale/pt-br");
    dayjs.locale("pt-br");
    let diaMes = dayjs().format('DD/MM');
    let diaSemana = dayjs().format('dddd');
    let stringSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

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
            <h1>{stringSemana}, {diaMes}</h1>
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