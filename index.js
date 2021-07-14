import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/lla', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/piggy-bank', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

app.listen(9000);
