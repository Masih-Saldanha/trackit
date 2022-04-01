import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "../contextos/TokenContext";
import TopoEMenu from "./TopoEMenu";
import Home from "./Home";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";

export default function App() {
    const [token, setToken] = useState("");
    const [imagemPerfil, setImagemPerfil] = useState("");

    return (
        <TokenContext.Provider value={{token, setToken, imagemPerfil, setImagemPerfil}}>
            <BrowserRouter>
                <TopoEMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro/" element={<Cadastro />} />
                    <Route path="/hoje/" element={<Hoje />} />
                    <Route path="/habitos/" element={<Habitos />} />
                    <Route path="/historico/" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}