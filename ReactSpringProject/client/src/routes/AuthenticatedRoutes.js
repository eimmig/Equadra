import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import ContaPageForm from "../pages/Conta/ContaPageForm";
import ContaPageList from "../pages/Conta/ContaPageList";
import HomePage from "../pages/HomePage/HomePage";
import MovimentoPageForm from "../pages/Movimento/MovimentoForm";
import MovimentoPageList from "../pages/Movimento/MovimentoPageList";

const AuthenticatedRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/contas" element={<ContaPageList />} />
                <Route path="/contas/new" element={<ContaPageForm />} />
                <Route path="/contas/:id" element={<ContaPageForm />} />

                <Route path="/movimentos" element={<MovimentoPageList />} />
                <Route path="/movimentos/new" element={<MovimentoPageForm />} />
                <Route path="/movimentos/:id" element={<MovimentoPageForm />} />


                <Route path="/*" element={<HomePage />} />
            </Routes>
        </div>
    );
}
export default AuthenticatedRoutes;