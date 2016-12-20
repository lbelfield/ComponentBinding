var webpack = require('webpack');

module.exports = {
    entry: {        
        'vendor': './app/vendor.ts',
        'app': './app/app.module.ts',        
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        },
        {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }
        ]
    },
    output: {
        path: './webpack-output',
        filename: '[name]-bundle.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        })
    ],
    devtool: 'source-map'
};