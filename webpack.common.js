const path = require('path');
const{ CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|pdf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      chunks: ['app', 'vendors'],
    }),
  ],
  optimization: {
    namedModules: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
  },
};
