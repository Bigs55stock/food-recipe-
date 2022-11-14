import React from "react";
import FoodCard from "./FoodCard";
import './FoodSearch.css' 
import {useEffect, useState} from 'react'

function FoodSearch (){
    
    const [url, setUrl] =useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals)
            })
    },[url])
    
    return (
        <div className="foodserContainer">
            <div className= "main">
                <h1>Search Food Here</h1>
                <h4>hello you get all types of food here</h4>
            </div>
            <div className="search">
                <input type="search" className="search-bar" />
            </div>
            <div className="Cardcontainer">
                <FoodCard />
               
            </div>

        </div>

    )
}

export default FoodSearch