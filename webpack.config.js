module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        inline: true
    }
}