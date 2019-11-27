module.exports = {
    devServer: {
        proxy: {
            '/api*': {
                // Forward frontend dev server request for /api to django dev server
                target: 'http://localhost:8000/',
            }
        },
        publicPath: process.env.NODE_ENV === 'production'
            ? '/register-machine/'
            : '/'
    }
}