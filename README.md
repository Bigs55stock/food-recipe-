# Food Recipe (Easy Foods)


## Project Description

Easy Foods is an app where you can search up foods that your interested in cooking. When you pick the food it will give you a step by step instructions to how to cook and what ingredients are needed. 

## Project Links

- [github repo](https://github.com/Bigs55stock/food-recipe-)
- [deployment](https://food-recipe-zeta.vercel.app/foods)
- [demo recording]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes](IMG_7522.jpg )
- [react architecture](2.jpg , IMG_7521.jpg)


#### MVP 
have input for the what the user whats to search up
Have ingredients and recipes show up

#### PostMVP 

Add photos
Add a filter option {if every Mvp and stretch goal is complete then}

## Components



| Component | Description | 

| App | This will make the initial data pull and include React Router| 
| Header | This will render the header, include the nav and links | 
| FoodCard | This will render the display of food you ca click on this to go futher in the foods page,  | 
| FoodSearch | This is on same page where you search for food and through catagories | 
| FoodRecipe | This page will show recipes | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| css | H |  2hrs | 3-4hrs | 3-4hrs |
| Working with API | H | 4hrs| 4-6hrs | 4-6hrs |
| Total | H | 4days| 4days | 4days |

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

**ERROR**: Api Link not working                                
**RESOLUTION**: Added key from api 
**ERROR**: Api Link not working again                              
**RESOLUTION**: was missing "/" from http//