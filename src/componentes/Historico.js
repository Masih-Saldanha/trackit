import styled from "styled-components";

export default function Historico() {
    return (
        <HistoricoExibido>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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