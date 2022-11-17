import React from "react";
import {useParams} from "react-router-dom"
import {useState} from 'react'

function FoodRecipe() {
    const[object,setObject]=useState()
    const{MealId}=useParams()
    if(MealId!==""){
        
        fetch(`https:/www.themealdb.com/api/json/v2/${process.env.REACT_APP_APIKEYS}/lookup.php?i=${MealId}`)
            .then(res=> res.json())
            .then(data => {
                setObject(data.meals[0]);
            })
    }
    
    return(
          <div className="recipecontainer">
            {(!object)?"": (
                <div className="info"> 
                   <div className="imgrecipe" >
                   <img src={object.strMealThumb} alt="pic of food"/>
                  </div>
                   <div className="moreinfo">
                    <h1 className="Mealname"> Meal: {object.strMeal}</h1>
                    <h2>categories:</h2>
                    <h3> {object.strArea}, {object.strCategory}</h3>
                    </div>
                    <div className="recipein" >
                        <h2 className="Head1name"> Ingredients/Amount</h2>
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
                        <h3>{object.strIngredient12} {object.strMeasure12}</h3>
                        <h3>{object.strIngredient13} {object.strMeasure13}</h3>
                        <h3>{object.strIngredient14} {object.strMeasure14}</h3>
                        <h3>{object.strIngredient15} {object.strMeasure15}</h3>
                        <h3>{object.strIngredient16} {object.strMeasure16}</h3>
                        <h3>{object.strIngredient17} {object.strMeasure17}</h3>
                        <h3>{object.strIngredient18} {object.strMeasure18}</h3>
                        <h3>{object.strIngredient19} {object.strMeasure19}</h3>
                        <h3>{object.strIngredient20} {object.strMeasure20}</h3>
                     </div>
                    <div className="instructions">
                        <h2 className="Head1name"> Instructions</h2>
                        <h3 className="instruction-p">{object.strInstructions}</h3>
                        </div>
                </div>
                     
            )} 
        </div> 
    
    )
}

export default FoodRecipe