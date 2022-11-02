import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Quadras from "../pages/Quadra/Quadra";
const AuthenticatedRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/newquadra" element={<Quadras />} />
                <Route path="/seequadra" element={<Quadras />} />
            </Routes>
        </div>
    );
}
export default AuthenticatedRoutes;