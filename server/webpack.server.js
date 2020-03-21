const path = require('path');

modules.exports = {
    // Inform webpack that we're building a bundle 
    // for nodeJS, rather than for the browser

    target : 'node',

    // Tell webpack the file of our 
    // server application
    entry: './src/index.js',

    // Tell webpack where to put the output file 
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
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