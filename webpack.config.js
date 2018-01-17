
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
  context: __dirname + '/frontend',
  entry: {
    'index': './pages/Kit/index.js',
    'news': './pages/news/page_news.js',
    'messages': './pages/messages/page_messages.js',
    'friends': './pages/friends/page_friends.js',
    'registration': './pages/registration/page_registration.js',
    'stats': './pages/stats/page_stats.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: 'scripts',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
      jQuery: __dirname + '/frontend/scripts/jquery-3.2.1.min.js',
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['index'], template: './pages/Kit/index.pug' }),
    new HtmlWebpackPlugin({ filename: 'page_news.html', chunks: ['news'], template: 'pages/news/page_news.pug' }),
    new HtmlWebpackPlugin({ filename: 'page_messages.html', chunks: ['messages'], template: 'pages/messages/page_messages.pug' }),
    new HtmlWebpackPlugin({ filename: 'page_friends.html', chunks: ['friends'], template: 'pages/friends/page_friends.pug' }),
    new HtmlWebpackPlugin({ filename: 'page_registration.html', chunks: ['registration'], template: 'pages/registration/page_registration.pug' }),
    new HtmlWebpackPlugin({ filename: 'page_stats.html', chunks: ['stats'], template: 'pages/stats/page_stats.pug' }),
  ],
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },
  resolve: {
    alias: {
      img: path.resolve(__dirname, 'frontend', 'img'),
      components: path.resolve(__dirname, 'frontend', 'components'),
      fonts: path.resolve(__dirname, 'frontend', 'fonts'),
    },
  },
  module: {
    rules: [/* {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory=true',
      options: {
        presets: ['env'],
      },
    }, */
    {
      test: /\.pug$/,
      use: {
        loader: 'pug',
        options: {
          pretty: true,
        },
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style',
        use: 'css',
      }),
    }, {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        use: [{ loader: 'css' }, { loader: 'stylus' }],
      }),
    }, {
      test: /\.(png|ipg|svg|ttf|eot|woff|woff2|jpg|mp4)$/,
      use: {
        loader: 'file',
        options: {
          name: '[path][name].[ext]',
        },
      },
    },
    ],
  },
};
const productionConfig = () => baseConfig;
const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
  };
  return Object.assign({}, baseConfig, config);
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
