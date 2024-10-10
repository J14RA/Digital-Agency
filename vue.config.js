const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // Enable/disable Vue Options API
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Disable devtools in production
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // Disable hydration mismatch details in production
      }),
    ],
  },
};
