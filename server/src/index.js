import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer'
import createstore from './helpers/createStore';

const app = express()

app.use(express.static('public'))

app.get('*', (req,res)=>{
    const store = createstore();

    // Some logic to initialize 
    // and load data into the store
    // we don't do this insider the render 

    res.send(renderer(req, store));
});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
});