const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  context: path.resolve("src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css']
  },
  entry: [
    './main.tsx',
    '../node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js' 
  },
  devtool: 'source-map',
  devServer: {
    contentBase: ['./dist', './src/github' ],
    inline: true, 
    host: 'localhost',
    port: 8080,
    stats: 'errors-only'
  },  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,        
        use: [ "style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};