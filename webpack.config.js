const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
const indextInput = './public/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js'],
    },
    entry: {
        app: ['./src/'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: './src/index.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: indexOutput,
            template: indextInput,
        }),
        new CopyPlugin({
            patterns: [
                { from: './public/styles.css', to: '../dist/styles.css' },
            ],
        }),
    ],
};
module.exports = webpackInitConfig;