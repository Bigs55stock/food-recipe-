import React from 'react';
import './App.css';
import About from './About'
import Header from './Header'
import Home from './Home'
import FoodSearch from './FoodSearch';
import { Route, Routes} from "react-router-dom";
import FoodRecipe from './FoodRecipe';






function App() {

  
  
  return (
    <div>
          
    <Header />
  <main>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/about" element={ <About /> } />
    <Route path="/foods" element={ <FoodSearch /> } />
    <Route path="/:MealId" element={<FoodRecipe />} />
  </Routes>
</main>
</div>
  );
}

export default App;
 {/* <Route path="/recipes" element={ <Stocks /> } /> */}