import { useState } from "react";
import styled from "styled-components";
import HabitoHoje from "./HabitoHoje";

export default function Hoje() {
    const [listaHabitosHoje, setListaHabitosHoje] = useState([0, 1, 2])

    function renderizarHabitosHoje() {
        if (listaHabitosHoje.length > 0) {
            return listaHabitosHoje.map(habito => {
                // const { algo, algo2, algo3 } = habito;
                return (
                    <HabitoHoje key={habito} />
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
article {
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    section {
        h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }
        h3 {
            font-size: 13px;
            margin-bottom: 3px;
        }
    }
    figure {
        width: 69px;
        height: 69px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 28px;
        }
    }
}
`