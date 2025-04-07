/** @returns {import("webpack").Configuration} */
module.exports = () => ({
  entry: "./entry.js",
  externals: { jquery: "jQuery" },
  mode: "production",
});
