const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup : './frontend/popup.jsx'
      },
      mode: 'development',
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
      module: {
        rules: [
          { //Open .js and .jsx files
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader : 'babel-loader',
                options: {
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            },
          }]
      },
      plugins: [
        new HtmlWebpackPlugin({
            template : './frontend/popup.html',
            filename:"popup.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from : "public"}
            ]
        })
      ],
}