import React from "react";
import {NavLink,Link} from "react-router-dom";
import Logo from "../components/logo";
import "./NavBar.css";
const NavBar = (props) => {
    return (
        
        <header className="header">
            <div className="logo">
                <Link to="/">
                <Logo className="logo__element" />
                <div className="logo_text">
                    WasteWatch <p className="text__360">360</p>
                </div>
                </Link>
            </div>
            <nav className="navbar">
                <li>
                <NavLink to="/" className="nav_NavLink" >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/timeline" className="nav_NavLink" >
                    Timeline
                </NavLink>
                </li>
                <li>
                <NavLink to="/contact" className="nav_NavLink" >
                    Contact us
                </NavLink>
                </li>
                <div className="auth">
                    <button className="auth__btn">LOGIN</button>
                    <button className="auth__btn" >SIGN UP</button>
                </div>
            </nav>
        </header>
    
    );
};

export default NavBar;
