import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components"
import logo from "../assets/logo.svg"

export default function Cadastro() {
    const navigate = useNavigate();
    const [dadosContaNova, setDadosContaNova] = useState({ email: "", name: "", image: "", password: "" })

    function cadastrarConta(e) {
        e.preventDefault()
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", dadosContaNova);
        promise.then(response => {
            console.log("Deu bom o envio", response);
            navigate("/");
        });
        promise.catch(response => {
            alert("Algo deu errado, confira se seus dados estão corretos.");
            setDadosContaNova({ email: "", name: "", image: "", password: "" });
            console.log("Deu ruim o envio", response)
        });
    }

    return (
        <FrenteCadastro>
            <img src={logo} alt="logo" onClick={() => console.log(dadosContaNova)} />
            <form onSubmit={cadastrarConta}>
                <input
                    type="email"
                    value={dadosContaNova.email}
                    onChange={(e) => setDadosContaNova({ ...dadosContaNova, email: e.target.value })}
                    nome="email"
                    id="email"
                    placeholder="email"
                />
                <input
                    type="password"
                    value={dadosContaNova.password}
                    onChange={(e) => setDadosContaNova({ ...dadosContaNova, password: e.target.value })}
                    nome="senha"
                    id="senha"
                    placeholder="senha"
                />
                <input
                    type="text"
                    value={dadosContaNova.name}
                    onChange={(e) => setDadosContaNova({ ...dadosContaNova, name: e.target.value })}
                    nome="nome"
                    id="nome"
                    placeholder="nome"
                />
                <input
                    type="url"
                    value={dadosContaNova.image}
                    onChange={(e) => setDadosContaNova({ ...dadosContaNova, image: e.target.value })}
                    nome="foto"
                    id="foto"
                    placeholder="foto"
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </FrenteCadastro>
    )
}

const FrenteCadastro = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: calc(50vh - (498px / 2));
img {
    width: 180px;
    margin-bottom: 33px;
}
form {
    width: 303px;
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
        width: 100%;
    }
    input {
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;

        font-size: 20px;
    }
    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
    button {
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        margin-bottom: 25px;

        font-size: 21px;
        color: #FFFFFF;
    }
}
h1 {
    font-size: 14px;
    text-decoration-line: underline;
    color: #52B6FF;
}
`