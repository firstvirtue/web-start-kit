const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: [
            './src/index.js',
            './src/assets/scss/main.scss'
        ],
    },
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { test: /\.hbs$/, loader: 'handlebars-loader', exclude: /node_modules/ },
            // { test: /\.(png|jpe?g|gif|mp4)$/i, use: 'file-loader?name=./src/assets/img/[name].[ext]' },
            { test: /\.(mp4)$/i, loader: 'file-loader', options: {
                name: '[name].[ext]'
            }},
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
        contentBase: path.join(__dirname, 'src'),
        port: 3000,
        open: true,
        progress: true,
        // inline: true,
        // publicPath: '/',
    }
};