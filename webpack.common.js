// eslint-disable-next-line no-unused-vars
const path = require('path');
// eslint-disable-next-line no-unused-vars
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './public/productDetail.jsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/public'),
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
};
