const sassMiddleware = require('koa-sass-middleware');
const path = require('path');
const root = require('config').root;

module.exports = sassMiddleware({
  src: path.join(root, 'assets'), // css file context folder
  publicPath: '/assets/',  // request context path
  extension: '.scss',  // optional
  outputStyle: 'compressed', // optional, it can be nexted, extended, compact, compressed
  autoprefixer: {
    browsers: ['last 2 versions']
  } //optional, autoprefixer config
});
