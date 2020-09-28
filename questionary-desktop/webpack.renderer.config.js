const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const Dotenv = require('dotenv-webpack');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader'}, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(woff|eot|ttf|svg)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        outputPath: 'fonts/',
        name: "[name].[ext]"
      }
    }
  ],
});

plugins.push(
  new Dotenv()
)

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
