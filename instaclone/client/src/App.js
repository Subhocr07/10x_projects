import React from 'react'
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from './components/landing';
import Postview from './components/postview';
import Uploadpost from './components/uploadpost';


const App = () => {
  return (
    
      <Router>
         <Routes>
            <Route exact path="/" element={<Landing/>} ></Route>
            <Route exact path="/postview" element={<Postview/>} ></Route>
            <Route exact path="/createpost" element={<Uploadpost/>} ></Route>
         </Routes>
      </Router>
  )
}

export default App
