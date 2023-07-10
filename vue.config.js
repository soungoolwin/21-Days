// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: {
//       "^/api": {
//         target: "https://two1days.onrender.com",
//         changeOrigin: true,
//       },
//     },
//   },
// });
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://two1days.onrender.com",
        changeOrigin: true,
      },
    },
  },
};
