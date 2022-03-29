import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components"
import logo from "../assets/logo.svg"

export default function Home() {
    const navigate = useNavigate();
    const [dadosLogin, setDadosLogin] = useState({ email: "", password: "" })

    function fazerLogin(e) {
        e.preventDefault()
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosLogin);
        promise.then(response => {
            console.log("Deu bom o envio", response);
            navigate("/hoje/")
        });
        promise.catch(response => {
            alert("Algo deu errado, confira se seus dados estão corretos.");
            setDadosLogin({ email: "", password: "" });
            console.log("Deu ruim o envio", response)
        });
    }

    return (
        <FrenteLogin>
            <img src={logo} alt="logo" onClick={() => console.log(dadosLogin)} />
            <form onSubmit={fazerLogin}>
                <input
                    type="email"
                    value={dadosLogin.email}
                    onChange={(e) => setDadosLogin({ ...dadosLogin, email: e.target.value })}
                    nome="email"
                    id="email"
                    placeholder="email"
                />
                <input
                    type="password"
                    value={dadosLogin.password}
                    onChange={(e) => setDadosLogin({ ...dadosLogin, password: e.target.value })}
                    nome="senha"
                    id="senha"
                    placeholder="senha"
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </FrenteLogin>
    )
}

const FrenteLogin = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: calc(50vh - (396px / 2));
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