import { useState } from "react";
import styled from "styled-components";
import check_marca from "../assets/checkbox-marca.svg";

export default function HojeLista() {
    const [cor, setCor] = useState("#EBEBEB")
    const [selecionado, setSelecionado] = useState(false);

    return (
        <CaixaHabitoHoje cor={cor}>
            <section>
                <h2>Ler 1 capítulo de livro</h2>
                <h3>Sequência atual: 3 dias</h3>
                <h3>Seu recorde: 5 dias</h3>
            </section>
            <figure onClick={() => {
                if (selecionado) {
                    setCor("#EBEBEB");
                    setSelecionado(false);
                } else {
                    setCor("#8FC549");
                    setSelecionado(true);
                }
            }}>
                <img src={check_marca} alt="Caixa de Marcar" />
            </figure>
        </CaixaHabitoHoje>
    )
}

const CaixaHabitoHoje = styled.article`
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
    background: ${(props) => props.cor};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 28px;
    }
}
`