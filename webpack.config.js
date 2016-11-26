
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require("path");
module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./app.js",
    vendor: ["preact", "preact-compat", "preact-router"]
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/assets/"
  },
  resolve: {
    extensions: [
        '.js',
        '.jsx'
    ],
    alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat',
        'react-dom/server': 'preact-compat',
        'components': path.resolve(__dirname, 'src/components'),
        'services': path.resolve(__dirname, 'src/services')
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/preact-compat')
        ]
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],
  devServer: {
    contentBase: __dirname + '/src',
    port: 3001,
    historyApiFallback: true
  }
}
