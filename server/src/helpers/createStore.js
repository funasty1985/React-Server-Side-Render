// Here we just want to create react store 
// but not including hooking the store component 
// so here we don't have <Provide/>

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from '../client/reducers';
export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
};