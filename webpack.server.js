// const nodeExternals = require('webpack-node-externals');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

// module.exports = {
//   target: 'node',
//   externals: [nodeExternals()],
//   entry: path.resolve(__dirname, './public/server.jsx'),
//   output: {
//     path: path.resolve(__dirname, 'client', 'dist'),
//     // publicPath: '/dist/',
//     filename: 'server.js',
//     library: 'app',
//     libraryTarget: 'commonjs2',
//   },
//   // resolve: {
//   //   extensions: ['.js'],
//   //   alias: {
//   //     components: path.resolve(__dirname, '..', 'src/components'),
//   //   },
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include: path.join(__dirname, '/public'),
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-react', '@babel/preset-env'],
//           plugins: ['@babel/plugin-proposal-class-properties'],
//         },
//       },
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(ttf|eot|otf|svg|png)$/,
//         loader: 'file-loader?emitFile=false',
//       },
//       {
//         test: /\.(woff|woff2)$/,
//         loader: 'url-loader?emitFile=false',
//       },
//     ],
//   },
// };

const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge(common, {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './public/server.jsx',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'server.js',
    library: 'productDetail',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
});
