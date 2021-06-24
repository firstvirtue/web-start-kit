const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        main: [
            './src/prod.js',
            './src/assets/scss/main.scss'
        ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { test: /\.hbs$/, loader: 'handlebars-loader', exclude: /node_modules/ },
            { test: /\.(png|jpe?g|gif|mp4)$/i, loader: 'file-loader', options: {
                name: '[name].[ext]',
                outputPath: './assets/img',
                publicPath: './assets/',
            }},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            template: 'src/layout-prod.hbs',
            templateParameters: require('./src/assets/data.json')
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
};