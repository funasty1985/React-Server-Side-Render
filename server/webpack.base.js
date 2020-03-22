module.exports = {
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
}