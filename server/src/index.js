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
    })
    .map(promise => {
        if(promise){
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        };
    });  
    // the second map func above is a hack to the promises list
    // which resolves each promise , 
    // ie route.loadData(store),  even if it is rejected by any reason 
    // so that Promise all below always function well.
    
    Promise.all(promises).then(()=> {
        const context = {};
        const content = renderer(req, store, context);

        // context will record a redirect url if <Redirect/> is rendered
        console.log('context ',context)
        if(context.url){
            return res.redirect(301, context.url)
        }

        if (context.notFound){
            res.status(404)
        }
        res.send(content);  
    })

});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
});