const path = require('path');

module.exports = {
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
    },

    // Tell webpack to run babel on every file it runs through
    // ie all es20XX file will convert to es6
    module:{
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{ 
                    presets: [
                        'react',    // turn JSX to normal function call 
                        'stage-0',  // for async call 
                        ['env', { targets: { browsers: ['last 2 versions'] }}]   // master preset, run all the transcend rules 
                                                                                 // to meet the requirement for the latest 2 versions of all popular browser    
                    ]
                }
            }
        ]
    }
};