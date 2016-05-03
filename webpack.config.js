module.exports = {
    entry: {
        'examples': './examples/examples.js'
    },
    output: {
        filename: '[name].js',
        path: 'examples/dist',
        publicPath: '/dist/'
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
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};
