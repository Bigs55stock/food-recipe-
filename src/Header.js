import React from "react";
import { Link } from "react-router-dom";




function Header (){
   
        return(
            <header className = "Header">
                <h3 className="Easyfood"> Easy Foods </h3>
                <Link to="/about"><span role="img" aria-label="Click">❓</span></Link>
                <Link to="/"><span role="img" aria-label="Click">🏠</span></Link>
                <Link to="/foods"><span role="img" aria-label="Click">🥘</span></Link>
            </header>
        )
   
}

export default Header;

