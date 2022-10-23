import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../services/Auth/auth.service";

const NavBar = (props) => {

    const onClickLogout = () => {
        AuthService.logout();
        window.location.reload();
    };

    return (
        <div className="shadow-sm mb-2 " style={{backgroundColor: "#0db600f2"}}>
            <div className="container">
                <nav className="navbar navbar-expand" style={{backgroundColor: "#0db600f2"}}>
                    <Link to="/" className="navbar-brand">
                        <img src="/logo192.png" width="40" />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink to="/" className={ (navData) => navData.isActive ? "nav-link active" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <button className="btn btn-light" onClick={onClickLogout}>
                                &times; Sair
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default NavBar;