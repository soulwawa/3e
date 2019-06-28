const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    target: 'serverless',
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }
        }
    },
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        )

        return config
    },
}

// assetPrefix: !debug ? 'https://soulwawa.github.io/3e/' : '/',