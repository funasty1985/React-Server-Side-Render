import React from 'react';

// note that the client components are not wrapped by staticRouter 
// props.staticContext is not present in them.
const NotFoundPage = ({ staticContext = {}}) => {
    staticContext.notFound = true
    return <h1>Oooops, route note found</h1>;
};

export default {
    component: NotFoundPage
};