// console.log("react is great")
// import add from './app2.js';
// console.log(add(1, 2, 3));
import React from 'react';
import ReactDOM from 'react-dom';
//create a function
var MyData =()=>{
    return <h1>Reading react is easy but practical is wow</h1>;
};
ReactDOM.render(<MyData/>,document.getElementById("app"));//render