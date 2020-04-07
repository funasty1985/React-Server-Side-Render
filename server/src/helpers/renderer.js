import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes'; // it is now an Array but not a component 
import serialize from 'serialize-javascript';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                {/* <Routes /> */}
                <div>{renderRoutes(Routes)}</div>   
                {/* renderoutes() takes in the config array and turn it to a route component similar to <Routes> */}
            </StaticRouter>
        </Provider>
    );
    
    return `
        <html>
            <head></head>
            <body>
                <div id='root'>${content}</div>
                <script>
                    window.INITAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};