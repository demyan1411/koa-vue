const config = require('config');
const path = require('path');
const pug = require('pug');

module.exports = function*(next) {
  this.render = function(relPath, options) {
    return pug.renderFile(path.join(config.templates.root, relPath) + '.pug', options);
  };

  yield* next;
};
