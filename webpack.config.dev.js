const CopyPlugin = require('copy-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const path = require('path'); // Para trabajar con archivos y rutas de directorio

module.exports = {
    entry: './src/index.js',
	output: { 
        path: path.resolve(__dirname, './dist'),
		filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
	},
	resolve: {
        extensions: ['.js'],
	},
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                    
                }
            },           
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]',
                }
            },            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new DotenvWebpackPlugin(),
        new ProgressPlugin(true),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3005,
        open: true,
    }
}