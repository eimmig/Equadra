import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import UserSignupPage from "../pages/User/UserSignupPage";

const SignRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<UserSignupPage />} />
            </Routes>

        </div>
    );
}
export default SignRoutes;