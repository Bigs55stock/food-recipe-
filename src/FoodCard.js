import React from "react";

function FoodCard ({data}){
    console.log(data)
    return (
        <div className="card">
            <img src= 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' alt=' ' />
            <h4>Spicy Arrabiata Penne</h4>
        </div>

    )
}

export default FoodCard