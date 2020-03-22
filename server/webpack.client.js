const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
    // target, 
    // by default is browser
    // this webpack will build a bundle targeting client browser  


    // Tell webpack the file of our 
    // server application
    // a different entry to webpack.server.js
    entry: './src/client/client.js',

    // Tell webpack where to put the output file 
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config)