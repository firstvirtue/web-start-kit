const path = require('path');
const HandlearsPlugin = require('handlebars-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // { test: /\.hbs$/, loader: 'handlebars-loader'}
        ]
    },
    plugins: [
        new HandlearsPlugin({
            entry: path.join(process.cwd(), 'src', '*.hbs'),
            output: path.join(process.cwd(), 'build', '[name].html')
            // data: 
        })
    ]
};