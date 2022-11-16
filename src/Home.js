import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div className="Homecontainer">
        <h1 className="Home-h1">Welcome To Easy Foods </h1>
        <p className="Home-p">Here we have all types of different Food recipes which gives you a step by step instructions to cook</p>
        <Link to="/foods">Food search</Link>
      </div>
    );
}

export default Home;