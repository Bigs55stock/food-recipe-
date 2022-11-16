import React from "react";
import {useNavigate} from "react-router-dom"


//Hardcoded data with base info
//Now need to add api data that is being mapped through

function FoodCard ({data}){
    // console.log(data)
    let navigate = useNavigate()
    return (
      <div className="main" >  
        { (!data)? "cant locate": data.map( object => {
           return(
            <div className="card" key={object.idMeal} onClick={() => {navigate(`/${object.idMeal}`)}}>
            <img src={object.strMealThumb} alt='food pic' />
            <h4>{object.strMeal}</h4>
        </div>
           )
        })
        
   }
     </div>
    )
}

export default FoodCard