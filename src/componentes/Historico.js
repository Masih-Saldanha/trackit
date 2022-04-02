import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Historico() {
    // const [valor, setValor] = useState(new Date());

    // function onChange(nextValue) {
    //     setValor(nextValue);
    // }

    return (
        <HistoricoExibido>
            <h1>Histórico</h1>
            <Calendar
                // onChange={onChange}
                // value={valor}
                calendarType="US"
                locale="pt-br"
            />
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