module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './app'
    },
    output: {
        filename: './app/bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}
