var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'react-dropdown': './lib/index.js'
    },
    externals: [
        'react',
        'react-dom'
    ],
    output: {
        filename: '[name].js',
        path: 'dist',
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'ReactDropdown'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
};
