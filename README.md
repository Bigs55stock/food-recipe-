# Food Recipe (Easy Foods)


## Project Description

Easy Foods is an app where you can search up foods that your interested in cooking. When you pick the food it will give you a step by step instructions to how to cook and what ingredients are needed. 

## Project Links

- [github repo](https://github.com/Bigs55stock/food-recipe-)
- [deployment](https://food-recipe-zeta.vercel.app/foods)
- [demo recording](https://www.youtube.com/watch?v=pnwOATCLJx0)

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes]( https://i.imgur.com/zgvKenT.jpg)
- [react architecture](https://i.imgur.com/qZGEJSZ.jpg , https://i.imgur.com/OvMCVAk.jpg)


#### MVP 
have input for the what the user whats to search up <br />
Have ingredients and recipes show up

#### PostMVP 

Add photos <br>
Add a filter option {if every Mvp and stretch goal is complete then}

## Components



| Component | Description | 

| App | This will make the initial data pull and include React Router| <br />
| Header | This will render the header, include the nav and links | <br />
| FoodCard | This will render the display of food you ca click on this to go futher in the foods page,  | <br />
| FoodSearch | This is on same page where you search for food and through catagories | <br />
| FoodRecipe | This page will show recipes | <br />

## Time Frames


| Component | Priority | Estimated Time | Time Invested | Actual Time |<br />
| css | H |  2hrs | 3-4hrs | 3-4hrs |<br />
| Working with API | H | 4hrs| 4-6hrs | 4-6hrs |<br />
| Total | H | 4days| 4days | 4days |<br />

## Additional Libraries
Css, react, router

## Code Snippet
  
  fetch(`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_APIKEYS}/lookup.php?i=${MealId}`)
            .then(res=> res.json())
            .then(data => {
                setObject(data.meals[0]);
            })
    }


## Issues and Resolutions

**ERROR**: Api Link not working      <br />                          
**RESOLUTION**: Added key from api <br />
**ERROR**: Api Link not working again    <br />                          
**RESOLUTION**: was missing "/" from http//   <br />