
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
    context: __dirname + '\\frontend',
    entry:{
        'index': './Kit/index.js',
        'news': './pages/page_news.js',
        'messages': './pages/page_messages.js',
        'friends': './pages/page_friends.js'
    },
    output:{
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        library: 'scripts'
    },
    plugins:[
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new HtmlWebpackPlugin({filename: 'index.html',chunks: ['index'],template: './Kit/index.pug'}),
        new HtmlWebpackPlugin({filename: 'page_news.html',chunks: ['news'],template: 'pages/page_news.pug'}),
        new HtmlWebpackPlugin({filename: 'page_messages.html',chunks: ['messages'],template: 'pages/page_messages.pug'}),
        new HtmlWebpackPlugin({filename: 'page_friends.html',chunks: ['friends'],template: 'pages/page_friends.pug'})
    ],/*
    resolve:{
        modules:['node-modules'],
        extensions:['.js', ".json", '.styl', '.pug']
    },*/
    resolveLoader:{
        modules:['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.pug$/,
            use: {
                loader: 'pug',
                options: {
                    pretty: true
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style',
                use: 'css'
            })
        }, {
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({
                //fallback: 'style',
                use: [{loader:'css'},{loader:'stylus'}]
            })
        }, {
            test: /\.(png|ipg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }
        ]
    }
};
const productionConfig = () => baseConfig
const developmentConfig = () =>{
    const config = {
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            watchOptions:{
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    }
    return Object.assign(
        {}, baseConfig, config
    )
}

module.exports = (env) => {
    if (env === 'production'){
        return productionConfig()
    }
    return developmentConfig()
}