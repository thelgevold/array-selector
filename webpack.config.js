var path = require('path');

module.exports = {
    entry: './sample/array-selector-sample.js',
    output: {
        path: __dirname,
        filename: 'sample/array-selector.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'sample'),
                loader: 'babel-loader'},
            { test: path.join(__dirname, 'source'),
                loader: 'babel-loader' }
        ]
    }
};