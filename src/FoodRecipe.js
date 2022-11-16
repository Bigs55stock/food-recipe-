import React from "react";
import {useParams} from "react-router-dom"
import {useState} from 'react'

function FoodRecipe() {
    const[object,setObject]=useState()
    const{MealId}=useParams()
    if(MealId!=""){
        
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res=> res.json())
            .then(data => {
                setObject(data.meals[0]);
            })
    }
    
    return(
          <div className="recipecontainer">
            {(!object)?"": (
                <div className="info"> 
                   <img src={object.strMealThumb} />
                   <div className="moreinfo">
                    <h1>{object.strMeal}</h1>
                    <h3>{object.strArea}</h3>
                    <h3>{object.strCategory}</h3>
                    </div>
                    <div className="recipein" >
                        <h2> ingreditentts</h2>
                        <h3>{object.strIngredient1} {object.strMeasure1}</h3>
                        <h3>{object.strIngredient2} {object.strMeasure2}</h3>
                        <h3>{object.strIngredient3} {object.strMeasure3}</h3>
                        <h3>{object.strIngredient4} {object.strMeasure4}</h3>
                        <h3>{object.strIngredient5} {object.strMeasure5}</h3>
                        <h3>{object.strIngredient6} {object.strMeasure6}</h3>
                        <h3>{object.strIngredient7} {object.strMeasure7}</h3>
                        <h3>{object.strIngredient8} {object.strMeasure8}</h3>
                        <h3>{object.strIngredient9} {object.strMeasure9}</h3>
                        <h3>{object.strIngredient10} {object.strMeasure10}</h3>
                        <h3>{object.strIngredient11} {object.strMeasure11}</h3>

                     </div>
                    <div className="instructions">
                        <h3>{object.strInstructions}</h3>
                        </div>
                </div>
                     
            )} 
        </div> 
    
    )
}

export default FoodRecipe