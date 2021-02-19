module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|svg|eot|woff|woff2|ttf|pdf)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }]
      }
    ]
  },
  entry: ['@babel/polyfill', __dirname + '/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  devServer: {
    contentBase: __dirname + '/build',
    historyApiFallback: true
  }
}
