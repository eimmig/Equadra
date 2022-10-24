import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../services/Auth/auth.service";

const NavBar = (props) => {

    const onClickLogout = () => {
        AuthService.logout();
        window.location.reload();
    };

    return (
        <div className="shadow-sm mb-2 col-lg-12" style={{backgroundColor: "#0db600f2"}}>
            <div className="container">
                <nav className="navbar navbar-expand col-lg-12" style={{backgroundColor: "#0db600f2"}}>
                    <Link to="/" className="navbar-brand">
                    <img src="/logo192.png" width="40" className="margin-left = 0px" />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 col-lg-12">
                        <li className="nav-item col-lg-5">
                            <NavLink to="/" className={ (navData) => navData.isActive ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2 mb-md-0 col col-lg-5">
                            <NavLink to="/" className={ (navData) => navData.isActive ? "nav-link active" : "nav-link"} style={{color: "white"}}>
                                Cadastrar Quadras
                            </NavLink>
                        </li>
                        <li className="nav-item col col-lg-2 margin-right:0px;" style={{width:"20"}}>
                            <button className="btn btn-light" onClick={onClickLogout}>
                                Sair
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default NavBar;