module.exports = {
    entry: {
        'examples': './examples/examples.js'
    },
    output: {
        filename: 'bundle.js',
        path: 'examples/',
        publicPath: '/'
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
