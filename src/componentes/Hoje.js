import { useState } from "react";
import styled from "styled-components";
import HojeLista from "./HojeLista";

export default function Hoje() {
    const [listaHabitosHoje, setListaHabitosHoje] = useState([])

    function renderizarHabitosHoje() {
        if (listaHabitosHoje.length > 0) {
            return listaHabitosHoje.map(habito => {
                // const { algo, algo2, algo3 } = habito;
                return (
                    <HojeLista key={habito} />
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