import logo from './logo.svg';

import Array1 from "./components/Array1"
import Child from "./components/Child"
import Result from "./components/Result"
import Data2 from "./components/Data2"
import {BrowserRouter,Switch,Route, Routes} from "react-router-dom"

import './App.css';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      { <img src={logo} className="App-logo" alt="logo" /> }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
         
        
         
         
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <BrowserRouter>
           <Data2 />        

           <Routes>
              <Route exact path="/" element={<Array1/>}/>
              <Route exact path="/Child" element={<Child/>}/>
              <Route exact path="/Result" element={<Result/>} />    

           </Routes>
        </BrowserRouter>        

        
        
      </header>
    
    </div>
  );
}

export default App;
