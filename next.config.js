const withCSS = require('@zeit/next-css');
const withGraphql = require('next-plugin-graphql');
const optimizedImages = require('next-optimized-images');

const BACKEND_URL = 'http://localhost:4000/';

// Configuración de servidor de pruebas
let nextConfig = {
  target: 'serverless',
  env: {
    BACKEND_URL,
  },
};

// Configuración de servidor de producción
// let nextConfig = { env: { BACKEND_URL } };

module.exports = optimizedImages(withCSS(withGraphql(nextConfig)));
