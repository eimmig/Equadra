import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import UserSignupPage from "../pages/User/UserSignupPage";

const SignRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<UserSignupPage />} />
                <Route path="/*" element={<LoginPage />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>

        </div>
    );
}
export default SignRoutes;