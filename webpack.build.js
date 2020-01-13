const Clean = require('clean-webpack-plugin')
const merge = require('webpack-merge')

module.exports = merge(require('./webpack.common'), {
	mode: 'production',
	output: {
		filename: '[hash].bundle.js',
		path: __dirname + '/build',
	},

	plugins: [
		new Clean(['./build']),
	],
})
