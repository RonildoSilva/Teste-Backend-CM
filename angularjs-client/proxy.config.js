const proxy = [
  {
    context: '/api',
    target: 'http://localhost:4001',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
