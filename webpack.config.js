const path = require("path");

module.exports = {
  mode: "development",
  entry: "./resources/ts/app.tsx",
  output: {
    path: `${__dirname}/public/js`,
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
