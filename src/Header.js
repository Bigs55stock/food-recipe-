import React from "react";
import { Link } from "react-router-dom";




function Header (){
   
        return(
            <header className = "Header">
                <h3 className="Easyfood"> Easy Foods </h3>
                <Link to="/">🏠</Link>
                <Link to="/about">❓</Link>
                <Link to="/foods">🥘</Link>
            </header>
        )
   
}

export default Header;

