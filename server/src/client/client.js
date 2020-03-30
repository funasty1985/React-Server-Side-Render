// Startup point for the client side application 
// bootup locatio of the app in the browser 
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));  // second args of creatStore is the inital state

// ReactDOM.render(<Home />, document.querySelector('#root'));
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));