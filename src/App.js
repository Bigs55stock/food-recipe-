import React from 'react';
import './App.css';
import About from './About'
import Header from './Header'
import Home from './Home'
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
          
    <Header />
  <main>
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/about" element={ <About /> } />
   
  </Routes>
</main>
</div>
  );
}

export default App;
 {/* <Route path="/recipes" element={ <Stocks /> } /> */}