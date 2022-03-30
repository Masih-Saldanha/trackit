import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";
import TopoEMenu from "./TopoEMenu";

export default function App() {
    const [logado, setLogado] = useState(false);

    return (
        <BrowserRouter>
            <TopoEMenu logado={logado} />
            <Routes>
                <Route path="/" element={<Home logado={logado} setLogado={setLogado} />} />
                <Route path="/cadastro/" element={<Cadastro />} />
                <Route path="/hoje/" element={<Hoje />} />
                <Route path="/habitos/" element={<Habitos />} />
                <Route path="/historico/" element={<Historico />} />
            </Routes>
        </BrowserRouter>
    )
}