import React from "react";
//Hardcoded data with base info
//Now need to add api data that is being mapped through

function FoodCard ({data}){
    console.log(data)
    return (
      <div className="main" >  
        { (!data)? "cant locate": data.map( object => {
           return(
            <div className="card">
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