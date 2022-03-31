import { useState } from "react";
import styled from "styled-components";
import lixeira from "../assets/lixeira.svg";

export default function Habitos() {
    const [listaHabitos, setListaHabitos] = useState([0, 1, 2])

    function renderizarHabitos() {
        if (listaHabitos.length > 0) {
            return listaHabitos.map(habito => {
                // const { algo, algo2, algo3 } = habito;
                return (
                    <article key={habito}>
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
                        <img src={lixeira} alt="lixeira" />
                    </article>
                )
            })
        } else {
            return (
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            )
        }
    }
    const renderizarListaHabitos = renderizarHabitos()

    return (
        <HabitosExibido>
            <section>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </section>
            {renderizarListaHabitos}
        </HabitosExibido>
    )
}

const HabitosExibido = styled.main`
margin: 92px 15px 129px 15px;
section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    h1 {
        font-size: 23px;
        color: #126BA5;
    }
    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 27px;
        color: #FFFFFF;
    }
}
article {
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
}
`