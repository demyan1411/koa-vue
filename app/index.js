require('babel-core/register');
require('babel-polyfill');

const app = require('./app');

app.listen(3000, () => console.log('server starting on http://localhost:3000'));
