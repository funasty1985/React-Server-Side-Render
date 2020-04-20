import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ( { route } ) => {
    return (
        <div>
            <Header/>
            {renderRoutes(route.routes)}       
        </div>
    )  
    // renderRouter(route.routes) tell the app 
    // there are child routes of this root routes                                         
    // are expected to be rendered. 
};

export default {
    component: App, 
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())  // work on SSR server matchRoutes() call 
};