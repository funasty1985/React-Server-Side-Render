// Startup point for the client side application 
// bootup locatio of the app in the browser 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';


// ReactDOM.render(<Home />, document.querySelector('#root'));
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.querySelector('#root'));