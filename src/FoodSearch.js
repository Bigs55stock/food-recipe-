import React from "react";
import FoodCard from "./FoodCard";
import './FoodSearch.css' 
import {useEffect, useState} from 'react'
import LowerCat from "./LowerCat";

function FoodSearch (){
    
    const [url, setUrl] =useState(`https:/www.themealdb.com/api/json/v2/${process.env.REACT_APP_APIKEYS}/search.php?f=a`)
    const [object,setObject] =useState()
    const [view,setView] =useState(false)
    const [search, setSearch]= useState("")
    
    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
              },
        })
            .then(res => res.json())
            .then(data => {
                setObject(data.meals)
                setView(true)
            })
    },[url])

    const setIndex=(letter) =>{
        setUrl(`https:/www.themealdb.com/api/json/v2/${process.env.REACT_APP_APIKEYS}/search.php?f=${letter}`)
    }

    const searchFood=(evt)=> {
        if (evt.key === "Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v2/${process.env.REACT_APP_APIKEYS}/search.php?s=${search}`)
        }
    }
    
    return (
        <div className="foodserContainer">
            <div className= "main">
                <h1>Search Food Here</h1>
                <h4>Here at Easy Foods we have alot of different variety of recipes to pick</h4>
                
            </div>
            <div className="search">
                <input type="search" className="search" placeholder="Search Food here" onChange={e=>setSearch(e.target.value)} onKeyPress={searchFood}/>
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