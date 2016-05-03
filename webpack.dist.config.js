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
            }
        ]
    }
};
