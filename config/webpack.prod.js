var webpack = require("webpack");
var path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

var BUILD_PATH = path.resolve(__dirname, "../dist");

module.exports = {
  mode: "production",
  devtool: "",

  entry: {
    draw: path.resolve(BUILD_PATH, "draw.js"),
  },

  output: {
    library: "draw",
    libraryTarget: "umd",
    path: BUILD_PATH,
    filename: "draw.min.js",
  },

  resolve: {
    extensions: [".js"],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          warnings: false,
          ie8: true,
        },
        extractComments: {
          condition: /@license/i,
          filename: (fileData) => {
            return `${fileData.filename}.LICENSE.txt${fileData.query}`;
          },
          banner: (licenseFile) => {
            return `License information can be found in ${licenseFile}`;
          },
        },
      }),
    ],
  },
};
