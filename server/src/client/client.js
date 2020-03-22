// Startup point for the clietn side application 
// bootup locatio of the app in the browser 
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// ReactDOM.render(<Home />, document.querySelector('#root'));
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
