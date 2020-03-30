import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from '../client/Routes';

export default (req, render) => {
    const content = renderToString(
        <Provider store={render}>
            <StaticRouter context={{}} location={req.path}>
                <Routes />
            </StaticRouter>
        </Provider>
    );
    
    return `
        <html>
            <head></head>
            <body>
                <div id='root'>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};