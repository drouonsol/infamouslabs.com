import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';


import Footer from './components/Footer'

import PageNotFound from "./pages/PageNotFound";



function App () {



  console.log("You're cute")
  
  return (
    <Router>
    
 

      <Routes>

  
      <Route exact path='/'title="Home" element={<Home />} />
    

        <Route path="*" element={<PageNotFound/>} />

  


      </Routes>
     
    </Router>
  );
}

export default App;
