// Startup point for the client side application 
// bootup location of the app in the browser 
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';

const store = createStore(reducers, window.INITAL_STATE, applyMiddleware(thunk));  // second args of creatStore is the inital state

// ReactDOM.render(<Home />, document.querySelector('#root'));
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));