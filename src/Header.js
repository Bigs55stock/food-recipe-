import React from "react";
import { Link } from "react-router-dom";




function Header (){
   
        return(
            <header className = "Header">
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </header>
        )
   
}

export default Header;

{/* <Link to="/recipes">Food Recipes</Link> */}