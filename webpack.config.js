const path = require('path');

module.exports = [
	{
		mode: 'development',
		target: 'node',
		entry: path.join(__dirname, 'source/server.jsx'),
		output: {
			path: path.join(__dirname, 'distribution'),
			filename: 'server.bundler.js'
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
		}
	},
	{
		mode: 'development',
		target: 'web',
		entry: path.join(__dirname, 'source/home/home.client.jsx'),
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
		}
	}
];
