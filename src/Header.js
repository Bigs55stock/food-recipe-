import React from "react";
import { Link } from "react-router-dom";




function Header (){
   
        return(
            <header className = "Header">
                <Link to="/Recipes">Food Recipes</Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </header>
        )
   
}

export default Header;