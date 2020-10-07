let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    devServer: {
      contentBase: './dist',
      inline: true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader', 'less-loader']
            },
            {
                test: /\.(img|png|gif|jpg)$/i,
                use: [
                    {loader: 'url-loader', options: {limit: 90284, name: 'img/[name].[hash:8].[ext]'}}
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve: {
        // import可省略后缀
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({template: './index.html'})
    ]
}