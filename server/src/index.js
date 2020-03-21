const express = require('express');
const React = require('react');
const rendertoString = require('react-dom/server').rendertoString; // importing staff from es2020 to es6
const Home = require('./client/components/Home').default;  // importing staff from es2020 to es6
const app = express();

app.get('/', (req,res)=>{
    const content = rendertoString(<Home />);  // Renders a bunch of components and produces a string out all the resulting HTML 
    res.send(content);
});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
});