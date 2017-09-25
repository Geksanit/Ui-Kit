
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
    context: __dirname + '\\frontend',
    entry:{
        'index': './index.js'
    },
    output:{
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins:[
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new HtmlWebpackPlugin({filename: 'index.html',chunks: ['index'],template: './index.pug'})
    ],
    resolve:{
        modules:['node-modules'],
        extensions:['.js', '.styl', '.pug']
    },
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