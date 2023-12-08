import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        console.log("hi1")
    }, []);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
