const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api1",
    createProxyMiddleware({
      target: "http://localhost:5000", // 目标服务器地址
      changeOrigin: true, // 是否改变源地址
      pathRewrite: {
        "^/api1": "", // 重写路径
      },
    })
  );
};
