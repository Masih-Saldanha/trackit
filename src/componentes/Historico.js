import { useState, useContext } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import dayjs from "dayjs";
import TokenContext from "../contextos/TokenContext";
import 'react-calendar/dist/Calendar.css';

export default function Historico() {
    const { habitosDiarios } = useContext(TokenContext);
    const [listaDeHabitos, setListaDeHabitos] = useState([]);

    // require("dayjs/locale/pt-br");
    // dayjs.locale("pt-br");

    function mostrarHabitosNoCalendario(data) {
        let dataFormatada = dayjs(data).format("DD/MM/YYYY");
        let habitosAtuais = null;

        habitosDiarios.forEach(habito => {
            if (habito.day === dataFormatada) {
                habitosAtuais = habito.habits;
            }
        });

        if (!habitosAtuais || dayjs(data).format("DD/MM/YYYY") === dayjs().locale("pt-br").format("DD/MM/YYYY")) {
            return <DiaNormal>{dayjs(data).format("DD")}</DiaNormal>
        }

        let habitosFeitos = habitosAtuais.filter((h) => h.done);

        if (habitosFeitos.length === habitosAtuais.length) {
            return <DiaFeito>{dayjs(data).format("DD")}</DiaFeito>;
        } else {
            return <DiaNaoFeito>{dayjs(data).format("DD")}</DiaNaoFeito>;
        }
    }

    function listarHabitos(data) {
        const dataFormatada = dayjs(data).format("DD/MM/YYYY");
        let habitosAtuais = [];
        habitosDiarios.forEach((habito) => {
            if (habito.day === dataFormatada) {
                habitosAtuais = habito.habits;
            }
        });

        setListaDeHabitos(habitosAtuais);
    }

    function mostrarHabitosDoDiaClicado() {
        return listaDeHabitos.length > 0 ? (
            <div className="habits-list">
                {listaDeHabitos.map((habito, indice) => (
                    <div key={indice} className="habits">
                        <TextoAtividade className="habito-name">{habito.name}: </TextoAtividade>
                        {habito.done ? <TextoFeito>Feita</TextoFeito> : <TextoNaoFeito>Não Feita</TextoNaoFeito>}
                    </div>
                ))}
            </div>
        )
            :
            (
                <></>
            );
    }

    function mostrarTituloDosHabitosDoDiaClicado() {
        let habitoDoDia = "";
        if (listaDeHabitos.length > 0) {
            habitoDoDia = listaDeHabitos[0].date;
        }

        return listaDeHabitos.length > 0 ?
            (
                <TextoPrincipal>Hábitos do dia {dayjs(habitoDoDia).locale("pt-br").format("DD/MM")}</TextoPrincipal>
            )
            :
            (
                <></>
            );
    }

    let HabitosDoDiaClicado = mostrarHabitosDoDiaClicado();
    let TituloDosHabitosDoDiaClicado = mostrarTituloDosHabitosDoDiaClicado();

    return (
        <HistoricoExibido>
            <h1>Histórico</h1>
            {/* <CalendarStyle> */}
            <Calendar
                calendarType="US"
                formatDay={(locale, date) => mostrarHabitosNoCalendario(date)}
                onClickDay={(data) => listarHabitos(data)}
            />
            {/* </CalendarStyle> */}
            {TituloDosHabitosDoDiaClicado}
            {HabitosDoDiaClicado}
        </HistoricoExibido>
    )
}

const HistoricoExibido = styled.main`
margin: 98px 15px 129px 15px;
h1 {
    margin-bottom: 17px;
    font-size: 23px;
    color: #126BA5;
}
`

const TextoPrincipal = styled.h2`
margin-top: 10px;
color: #126BA5;
`

const TextoAtividade = styled.h2`
margin-top: 10px;
font-size: 16px;
`

const TextoFeito = styled.h2`
font-size: 16px;
color: #8CC654;
`

const TextoNaoFeito = styled.h2`
font-size: 16px;
color: #E75665;
`

const DiaNormal = styled.p`
/* background: blue; */
/* border-radius: 50%; */
/* width: 35px; */
/* height: 35px; */
`

const DiaFeito = styled.p`
background: #8CC654;
/* border-radius: 50%; */
/* width: 35px; */
/* height: 35px; */
`

const DiaNaoFeito = styled.p`
background: #E75665;
/* border-radius: 50%; */
/* width: 35px; */
/* height: 35px; */
`