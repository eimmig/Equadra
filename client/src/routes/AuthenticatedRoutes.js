import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Quadras from "../pages/Quadra/Quadra";
import VerQuadra from "../pages/Quadra/VerQuadra";
const AuthenticatedRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/newquadra" element={<Quadras />} />
                <Route path="/seequadra/:id" element={<VerQuadra />} />
            </Routes>
        </div>
    );
}
export default AuthenticatedRoutes;