const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /'.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new HtmlWebpackPlugin({ appMountId: 'app', filename: 'index.html' }),
    new CopyPlugin({ patterns: [{ from: 'src/index.html' }], }),
    new HtmlWebpackPlugin({ appMountId: 'app', filename: 'index.html' }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './client'),
    publicPath: '/build/',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}