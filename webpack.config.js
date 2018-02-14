const webpack = require('webpack');

module.exports = {
	entry: './server.jsx',
	output: {
		filename: './bundler.js'
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						'env',
						'react'
					]
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
