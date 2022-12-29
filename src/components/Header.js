import React from "react";
import logo from '../imagens/logo.png'

export const Header = () => {
    return(
        <nav>
            <div className="contaner">
                <a className="navigation-brand" href="/">
                    <img src={logo} alt= "staart" />  
                </a>
            </div>
        </nav>
    );
};