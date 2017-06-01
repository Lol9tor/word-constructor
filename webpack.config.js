const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-dev-server/client?http://localhost:3030',
		'webpack/hot/only-dev-server',
		'./index.js',
		'./assets/css/index.css',
	],

	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	context: resolve(__dirname, 'src'),

	devServer: {
		hot: true,
		historyApiFallback: true,
		publicPath: '/dist',
		port: 3030
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loaders: [
					'babel-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								sourceMap: true,
								importLoaders: 2,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
					],
				}),
			},
			{ test: /\.(png|jpg)$/, use: 'file-loader?name=src/assets/images/[name].[ext]' },
			{ test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?name=src/assets/fonts/[name].[ext]' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?name=src/assets/images/[name].[ext]' },
		]
	},

	plugins: [
		new ExtractTextPlugin({ filename: 'index.css', disable: false, allChunks: true }),
		new webpack.HotModuleReplacementPlugin(),
	],
};

module.exports = config;