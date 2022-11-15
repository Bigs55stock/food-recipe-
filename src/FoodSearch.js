import React from "react";
import FoodCard from "./FoodCard";
import './FoodSearch.css' 
import {useEffect, useState} from 'react'
import LowerCat from "./LowerCat";

function FoodSearch (){
    
    const [url, setUrl] =useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')
    const [object,setObject] =useState()
    const [view,setView] =useState(false)
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.meals)
                setObject(data.meals)
                setView(true)
            })
    },[url])

    const setIndex=(letter) =>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    }
    
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
              
                {
                    view ?   <FoodCard data={object} /> :"doesnt exist" 
                }

            </div>
            <div className= "letterCats">
                <LowerCat letterIndex={(letter)=> setIndex(letter)} />             
            </div>
        </div>

    )
}

export default FoodSearch