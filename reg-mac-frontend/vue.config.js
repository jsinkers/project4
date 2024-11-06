module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        proxy: {
            '/api*': {
                // Forward frontend dev server request for /api to django dev server
                target: 'http://backend:8000/',
            }
        },
        devMiddleware: {
            publicPath: process.env.NODE_ENV === 'production'
                ? '/register-machine/'
                : '/'
        },
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}