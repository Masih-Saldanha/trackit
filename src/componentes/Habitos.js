import { useState } from "react";
import styled from "styled-components";
import HabitosLista from "./HabitosLista";
import HabitosListaDiasDaSemana from "./HabitosListaDiasDaSemana";

export default function Habitos() {
    const [listaHabitos, setListaHabitos] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [adicionarHabito, setAdicionarHabito] = useState(false);
    const [habitoNovo, setHabitoNovo] = useState({ name: "", days: [] });
    const arraySemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    function tirarElemento(array, item) {
        return array.filter(elemento => {
            return elemento !== item;
        });
    }

    function renderizarDiasDaSemana() {
        return arraySemana.map((dia, indice) => {
            // const { algo, algo2, algo3 } = habito;
            return (
                <HabitosListaDiasDaSemana
                    key={indice}
                    indice={indice}
                    dia={dia}
                    habitoNovo={habitoNovo}
                    setHabitoNovo={setHabitoNovo}
                    tirarElemento={tirarElemento}
                />
            )
        })
    }

    const renderizarListaDiasDaSemana = renderizarDiasDaSemana();

    function renderizarHabitos() {
        if (listaHabitos.length > 0) {
            return (
                <>
                    {adicionarHabito ?
                        <JanelaAdicionarHabito>
                            <input
                                type="text"
                                value={habitoNovo.name}
                                onChange={(e) => setHabitoNovo({ ...habitoNovo, name: e.target.value })}
                                nome="nome do hábito"
                                id="nome do hábito"
                                placeholder="nome do hábito"
                            />
                            <menu>
                                {renderizarListaDiasDaSemana}
                            </menu>
                            <div>
                                <BotaoSalvar onClick={() => setHabitoNovo({ ...habitoNovo, days: habitoNovo.days.sort() })}>Salvar</BotaoSalvar>
                                <BotaoCancelar onClick={() => setAdicionarHabito(false)}>Cancelar</BotaoCancelar>
                            </div>
                        </JanelaAdicionarHabito> :
                        <></>}
                    {listaHabitos.map(habito => {
                        // const { algo, algo2, algo3 } = habito;
                        return (
                            <HabitosLista key={habito} />
                        )
                    })}
                </>
            )
        } else {
            return (
                <>
                    {adicionarHabito ? <h1>Janela de adicionar</h1> : <></>}
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </>
            )
        }
    }
    const renderizarListaHabitos = renderizarHabitos()

    return (
        <HabitosExibido>
            <section>
                <h1>Meus hábitos</h1>
                <button onClick={() => setAdicionarHabito(true)}>+</button>
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
`

const JanelaAdicionarHabito = styled.article`
padding: 13px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
margin-bottom: 10px;
input {
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
}
input::placeholder {
    font-size: 20px;
    color: #DBDBDB;
}
menu {
    display: flex;
    margin-bottom: 29px;
}
div {
    display: flex;
    flex-direction: row-reverse;
}
`

const BotaoSalvar = styled.button`
background: #52B6FF;
border-radius: 5px;
border: none;
margin-left: 4px;
padding: 8px 17px;

font-size: 16px;
color: #FFFFFF;
`

const BotaoCancelar = styled.button`
background: #FFFFFF;
border-radius: 5px;
border: none;
margin-left: 4px;
padding: 8px 17px;

font-size: 16px;
color: #52B6FF;
`