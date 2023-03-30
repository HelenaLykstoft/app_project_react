import React, {useEffect, useState} from 'react'
import {Routes, Route, Link} from "react-router-dom";
import './styles/App.css'
import Home from "./routes/Home.jsx";
import FruitList from "./routes/FruitList.jsx";
import Fruit from "./routes/Fruit.jsx";

function App() {

    const [fruits, setFruits] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setFruits(data))
    },[]);


    return (
    <div>
        <nav>
            <ul>
                <li id="link"><Link to="/">Home</Link></li>
                <li id="link"><Link to="/fruit">Fruit</Link></li>

            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fruit" element={<Fruit/>}/>
        </Routes>
        <FruitList fruits={fruits}/>
    </div>
  )
}

export default App
