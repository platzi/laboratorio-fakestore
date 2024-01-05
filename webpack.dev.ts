import 'webpack-dev-server';

import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const config: Configuration = {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: [path.join(__dirname, 'build')],
		compress: true,
		port: 8080,
		historyApiFallback: true,
		// devMiddleware      : {
		// 	writeToDisk : true
		// },
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
};

export default merge(common, config);
