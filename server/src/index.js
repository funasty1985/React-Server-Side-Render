import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createstore from './helpers/createStore';

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:3000'    
        return opts;   
        // by default, the app wil be redirected to http://react-ssr-api.herokuapp.com
        // after google oauth login . x-forwarded-host is set (to localhost:3000)so that   
        // the app to redirect to localhost:3000 instead .  
    }
}))

app.use(express.static('public'))
app.get('*', (req,res)=>{
    
    const store = createstore(req);

    // matchRoutes check which component the incoming 
    // req.path want to render insider our app 
    // without render the app in the first place 
    const promises= matchRoutes(Routes, req.path).map(({route})=>{
        return route.loadData ? 
                route.loadData(store) : // we will load the data we want into the store. 
                null;  // not every component has loadDate()
    });  
    
    Promise.all(promises).then(()=> {
        res.send(renderer(req, store));  
    })

});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
});