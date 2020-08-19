import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';
import 'highlight.js/styles/darcula.css';
import hljs from 'highlight.js';
const path = require('path')
const stringifyObject = require('stringify-object');
hljs.initHighlightingOnLoad();

const Home = (props) => {
	// here we tie the selections to the state selected, and the logic is so that
	// some of the logic is dependent on other radios or checkboxes
  
  // RATS NEST OBJ TO TEST HIGHLIGHTING
  // 

   var obj = {
    entry: "path.resolve(__dirname, './client/index.js')",
    output: {
      path: "path.resolve(__dirname, 'build')",
      // publicPath: '/build/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: "/\.jsx?/",
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],    },
    plugins: [
      "new LodashModuleReplacementPlugin",
      "new HtmlWebpackPlugin({ appMountId: 'app', filename: 'index.html' })",
      "new CopyPlugin({ patterns: [{ from: 'src/index.html' }], })","new HtmlWebpackPlugin({ appMountId: 'app', filename: 'index.html' })","new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, })",
      "new MiniCssExtractPlugin()","new CleanWebpackPlugin()"
    ],    
    mode: process.env.NODE_ENV,
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      // host: 'localhost',
      // port: 8080,
      contentBase: "path.join(__dirname, './client')",
      publicPath: '/build/',
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },  
  };
  // const stringy = JSON.stringify(obj, undefined, 2);
  const pretty = stringifyObject(obj, {
    transform: (obj, prop, originalResult) => {
        if (prop === 'path' || prop === 'entry' || prop === 'contentBase' || prop === 'test') {
            return originalResult.replace(/['"]+/g, '');
          } else if (prop === 'plugins') {
            if (originalResult.includes('new')) {
              return originalResult.replace(/[']+/g, '').replace(/\\/g, "'");
            } else {
              return originalResult;
            }
          } else {
            return originalResult; 
        }
    },
    indent: '  ',
});

	return (
	
  <div className="codeBlock"><pre><code className="javascript">{`const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = `}{pretty}</code></pre></div>
	)
}

export default Home;