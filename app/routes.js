const Router = require('koa-router');
const router = new Router();

router
  .get('/', require('./controllers/index').get)
  .get('/login', require('./controllers/login').get)
  .post('/login', require('./controllers/login').post)
  .post('/logout', require('./controllers/logout').post);

module.exports = router;
