import styled from "styled-components";
import lixeira from "../assets/lixeira.svg";

export default function HabitosLista() {
    return (
        <CaixaHabito>
            <h2>Ler 1 capítulo de livro</h2>
            <div>
                <h2>D</h2>
                <h2>S</h2>
                <h2>T</h2>
                <h2>Q</h2>
                <h2>Q</h2>
                <h2>S</h2>
                <h2>S</h2>
            </div>
            <img
                src={lixeira}
                alt="lixeira"
                // onClick={}
            />
        </CaixaHabito>
    )
}

const CaixaHabito = styled.article`
padding: 13px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
margin-bottom: 10px;
h2 {
    font-size: 20px;
    margin-bottom: 8px;
}
div {
    display: flex;
    h2 {
        margin-bottom: 0px;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        background: #FFFFFF;
        color: #DBDBDB;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
img {
    width: 13px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
}
`
