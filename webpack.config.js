module.exports = {
    context: __dirname + "/src",
    entry: "./sfvote",
    output: {
        path: __dirname + "/public",
        filename: "index.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

