const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/owner', {
      target: 'https://dev.coumo.shop',
      changeOrigin: true,
    })
  );
};
