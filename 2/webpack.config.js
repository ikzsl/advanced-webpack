const path = require('node:path');

module.exports = {
	devtool: false,
	mode: 'development',
	entry: {
		app: { import: './src/app.js', dependOn: 'vendor' },
		home: { import: './src/pages/home.js', dependOn: 'vendor' },
		login: { import: './src/pages/login.js' },
		vendor: ['react', 'react-dom'],
	},
	output: {
		path: path.resolve('build'),
		filename: '[name].[hash].js',
		// clean: true,
	},
};
