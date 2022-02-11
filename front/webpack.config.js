const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
  
const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const config = {
  mode: 'development',
  
  // File entry of the project.
  entry: {
    app: SRC_DIR + '/app/index.tsx'
  },
  
  // Define output directory.
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js'
  },
  
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  
  // Manage loaders rules.
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: 'awesome-typescript-loader'
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  
  resolve: {
    // Add selected extension files as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'React with TypeScript, bundled with Webpack',
      template: SRC_DIR + '/index.html',
      filename: DIST_DIR + '/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  
  // Mount web server with HMR.
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3600,
    hot: true
  }
};
  
module.exports = config;