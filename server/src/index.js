const express = require('express');
const React = require('react');
const rendertoString = require('react-dom/server').rendertoString; 
const Home = require('./client/components/Home').default; 
const app = express();

app.get('/', (req,res)=>{
    const content = rendertoString(<Home />); 
    res.send(content);
});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
});