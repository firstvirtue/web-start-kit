const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/assets/js/main.js'
    },
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
            inject: false,
            minify: false,
            template: 'src/layout.hbs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        port: 3000,
        open: true,
        inline: true,
        hot: true,
        watchContentBase: true,
    }
};