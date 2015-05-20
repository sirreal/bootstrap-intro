module.exports = {
  // browser: ['google chrome'],
  // browser: ['google chrome canary'],
  port: 9090,
  startPath: '/index.html',
  // proxy: 'localhost:8005',
  // reloadDelay: 1000,
  files: [
    'demo/css/custom.css',
    'demo/index.html'
  ],
  server: {
    baseDir: 'demo',
    routes: {}
  }
};
