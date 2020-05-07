import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes'; // it is now an Array but not a component 
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            {/* context will be passed down to every child component of StaticRouter as an attribute of props*/}
            {/* for StaticRouter, the passed context to be renamed to props.staticContext in the child component */}
            <StaticRouter context={context} location={req.path}> 
                {/* <Routes /> */}
                <div>{renderRoutes(Routes)}</div>   
                {/* renderoutes() takes in the config array and turn it to a route component similar to <Routes> */}
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();
    
    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
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