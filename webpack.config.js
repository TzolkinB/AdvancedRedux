const webpack = require('webpack');
const path = require('path');

const paths = {
  DIST:   path.resolve(__dirname, 'dist'),	
  PUB:    path.resolve(__dirname, 'public'),	
  JS:     path.resolve(__dirname, 'src'),	
  CSS:    path.resolve(__dirname, 'src/css')
}

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  watch: true,
  entry: './src/app.js',
  output: {
    path: paths.PUB,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    port: 8080,
    compress: true,
    stats: 'errors-only',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|woff|woff2|ttf)$/,
        include: path.PUB,
        use: [{ loader: 'file-loader?name=[name].[ext]' }],
      },
      {
        test: /\.html$/,
        include: paths.PUB,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      PUB: paths.PUB,
      CSS: paths.CSS
    }
  },
};
