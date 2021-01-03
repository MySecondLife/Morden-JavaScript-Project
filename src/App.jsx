import React from 'react';
import sum from './sum';
import FirstLevel from './FirstLevel';
import './App.scss';

const imgsrc = require("./images/small.png");
const imgsrc2 = require("./images/dog.png");

export default class App extends React.Component {
    render() {
        const x = sum(1, 1);
        return (
                <div>
                    <h1 className="app">welcome to my test env {x}<span className="good"> let's go</span><input placeholder="whose money" /></h1>
                    <FirstLevel/>
                    <img src={imgsrc.default} />         
                    <img src={imgsrc2.default} />         
                </div>
            )
    }
}
