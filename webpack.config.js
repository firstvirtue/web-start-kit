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
            './src/index.js',
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
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // inject: false,
            // minify: false,
            // template: 'src/layout.hbs'
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
    devServer: {
        hot: true,
        hotOnly: true,
        contentBase: path.join(__dirname, './build'),
        port: 3000,
        open: true,
        // inline: true,
        progress: true,
        // hotOnly: true,
        // liveReload: true,
    }
};