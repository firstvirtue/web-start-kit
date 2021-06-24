const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.hbs$/, loader: 'handlebars-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            hash: true,
            minify: false,
            title: 'qweqwe',
            template: 'src/main.hbs'
        })
    ]
};