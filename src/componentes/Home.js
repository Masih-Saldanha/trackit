import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";
import TokenContext from "../contextos/TokenContext";
import logo from "../assets/logo.svg";

export default function Home() {
    const contexto = useContext(TokenContext);

    const navigate = useNavigate();
    const [dadosLogin, setDadosLogin] = useState({ email: "masih@email.com", password: "macuco" });
    const [carregandoLogin, setCarregandoLogin] = useState(false);

    function fazerLogin(e) {
        e.preventDefault()
        setCarregandoLogin(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", dadosLogin);
        promise.then(response => {
            const { data } = response;
            const { token, image } = data;
            console.log("Deu bom o envio", data);
            navigate("/hoje/");
            contexto.setToken(token);
            contexto.setImagemPerfil(image);
        });
        promise.catch(err => {
            const { response } = err;
            const { data } = response
            const { message } = data;
            alert(message);
            setDadosLogin({ email: "", password: "" });
            // console.log("Deu ruim o envio", message);
            setCarregandoLogin(false);
        });
    }
    if (contexto.token !== "") {
        return (
            <FrenteLogado>Você está logado! :)</FrenteLogado>
        )
    } else return (
        <Fundo>
            <FrenteLogin>
                <img src={logo} alt="logo" />
                {carregandoLogin === false ?
                    <form onSubmit={fazerLogin}>
                        <input
                            type="email"
                            value={dadosLogin.email}
                            onChange={(e) => setDadosLogin({ ...dadosLogin, email: e.target.value })}
                            nome="email"
                            id="email"
                            placeholder="email"
                            required
                        />
                        <input
                            type="password"
                            value={dadosLogin.password}
                            onChange={(e) => setDadosLogin({ ...dadosLogin, password: e.target.value })}
                            nome="senha"
                            id="senha"
                            placeholder="senha"
                            required
                        />
                        <button type="submit">Entrar</button>
                    </form> :
                    <form onSubmit={fazerLogin}>
                        <input
                            type="email"
                            value={dadosLogin.email}
                            onChange={(e) => setDadosLogin({ ...dadosLogin, email: e.target.value })}
                            nome="email"
                            id="email"
                            placeholder="email"
                            required
                            disabled
                        />
                        <input
                            type="password"
                            value={dadosLogin.password}
                            onChange={(e) => setDadosLogin({ ...dadosLogin, password: e.target.value })}
                            nome="senha"
                            id="senha"
                            placeholder="senha"
                            required
                            disabled
                        />
                        <button disabled>
                            <ThreeDots color="#FFFFFF" height={13} width={13} />
                        </button>
                    </form>}
                <Link to="/cadastro">
                    <h1>Não tem uma conta? Cadastre-se!</h1>
                </Link>
            </FrenteLogin>
        </Fundo>
    )
}

const Fundo = styled.figure`
position: fixed;
height: 100vh;
width: 100vw;
background-color: #FFFFFF;
`

const FrenteLogado = styled.figure`
position: fixed;
top: calc(50vh - 20px);
left: calc(50vw - 105.25px);
padding: 10px;
border-radius: 5px;
background-color: #52B6FF;

font-size: 20px;
color: #FFFFFF;
`

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