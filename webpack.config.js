const

	webpack = require('webpack'),

	path = require('path');

module.exports = [
	{
		entry: path.join(__dirname, 'source/server/server.jsx'),
		output: {
			path: path.join(__dirname, 'distribution'),
			filename: 'server.bundler.js'
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
	},
	{
		entry: path.join(__dirname, 'source/client/client.jsx'),
		output: {
			path: path.join(__dirname, 'distribution/public/assets'),
			filename: 'client.bundler.js'
		},
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
	}
];
