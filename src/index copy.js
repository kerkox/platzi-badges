// const element = document.createElement('h1');
// element.innerText = "Hello, Platzi Badges!";

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges from React!</h1>
// const element = React.createElement(
//     'a',
//     { href:'https://platzi.com', target:'_blank'},
//     'Ir a Platzi'
// );
// const name = "Paul Cortes";
// const sum = () => 3 +3;
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola soy ${name}`
// )
const jsx = (
    <div>
        <h1>Hola soy, Paul Cortes</h1> 
        <p>Soy Ingeniero FrontEnd</p>
    </div>
)
const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Hola soy Paul Cortes'),
    React.createElement('p',{},'soy Ingeniero FrontEnd')
    
)

const container = document.getElementById('app');

// ReactDOM.reder(__que__, ____donde___);
ReactDOM.render(element,container);
