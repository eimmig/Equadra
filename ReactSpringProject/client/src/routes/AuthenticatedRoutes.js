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
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </div>
    );
}
export default AuthenticatedRoutes;