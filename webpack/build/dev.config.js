let webpack = require('webpack')
const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    },
    plugins: [
        new webpack.BannerPlugin('版权归属: Cod4Man ，翻版必究'),
    ]
})