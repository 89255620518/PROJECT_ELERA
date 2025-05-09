import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app) {
    // Прокси для HTTP (API)
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://45.153.191.8:8000',
            changeOrigin: true,
        })
    );

    // Прокси для WebSocket
    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'ws://45.153.191.8:8000',
            ws: true,
            changeOrigin: true,
        })
    );
};