const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: [
            './src/assets/js/main.js',
            './src/assets/scss/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.hbs$/, loader: 'handlebars-loader', exclude: /node_modules/ },
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            minify: false,
            template: 'src/layout.hbs'
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    }
};