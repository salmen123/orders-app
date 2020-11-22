const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('./public/fakeData.json')
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/order.svg'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /(\.css)$|(\.s[ac]ss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'images/[name].[ext]',
            },
          },
        ],
      }
    ]
  }
};
