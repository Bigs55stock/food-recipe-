import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div className="Homecontainer">
        <h1 className="Home-h1">Welcome To Easy Foods </h1>
        <p className="Home-p">Here we have all types of different Food recipes with a step by step instruction to make the dish. Click on the food icon to get started. </p>
        <Link className="iconfood" to="/foods"><span role="img" aria-label="click">🥘</span></Link>
      </div>
    );
}

export default Home;