const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	exportPathMap: function() {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/projects': { page: '/projects' },
		};
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});

		return config;
	},
};

// assetPrefix: !debug ? 'https://soulwawa.github.io/3e/' : '/',
