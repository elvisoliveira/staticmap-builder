const path = require('path');
const html = require('html-webpack-plugin');
const copy = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new html({
                filename: 'index.html',
                template: './src/index.html'
        }),
        new copy([
            { to: 'templates/sidebar.html', from: './src/component/sidebar.html' },
            { to: 'templates/sidebar.css', from: './src/component/sidebar.css' },
            { to: 'templates/filter.html', from: './src/component/filter.html' },
            { to: 'templates/filter.css', from: './src/component/filter.css' },
            { to: 'templates/content.html', from: './src/component/content.html' },
            { to: 'templates/content.css', from: './src/component/content.css' },
            { to: 'templates/app.html', from: './src/component/app.html' },
            { to: 'templates/app.css', from: './src/component/app.css' }
        ])
    ]
};
