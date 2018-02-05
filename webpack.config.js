module.exports = {
	entry: './index.jsx',
	output: {
		filename: './bundler.js'
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
};
