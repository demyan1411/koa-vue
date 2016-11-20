// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed
if (process.env.TRACE) {
  require('./libs/trace');
}

const koa = require('koa');
const config = require('config');
const path = require('path');
const fs = require('fs');

const router = require('./routes');

const app = koa();
const middlewares = fs.readdirSync(path.join(config.root, 'middlewares')).sort();

// webpack
const webpack = require('webpack')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig        = require('../webpack.config')

// console.log(webpack(webpackConfig));
// console.log(webpackConfig.output.publicPath);

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: '/assets/js' }))
app.use(require("koa-webpack-hot-middleware")(compiler));

app.keys = [config.secret];

middlewares.forEach(middleware => {
  app.use(require(`./middlewares/${middleware}`));
});

app.use(router.routes());

module.exports = app;
