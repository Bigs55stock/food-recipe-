import React from "react";

function FoodSearch (props){
    return (
        <div className="foodserContainer">
            <div className= "main">
                <h1>Search Food Here</h1>
                <h4>hello you get all types of food here</h4>
            </div>
            <div className="search">
                <input type="search" className="search-bar" />

            </div>

        </div>

    )
}

export default FoodSearch