module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
};
