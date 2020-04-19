// Here we just want to create react store 
// but not including hooking the store component 
// so here we don't have <Provide/>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookies: req.get('cookie')  || ''}
    })

    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};