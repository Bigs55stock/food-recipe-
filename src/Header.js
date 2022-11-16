import React from "react";
import { Link } from "react-router-dom";




function Header (){
   
        return(
            <header className = "Header">
                
                <Link to="/">🏠</Link>
                <Link to="/about">❓</Link>
                <Link to="/foods">🥘</Link>
            </header>
        )
   
}

export default Header;

