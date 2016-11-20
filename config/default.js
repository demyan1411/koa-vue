const path = require('path');
const root = path.join(process.cwd(), 'app');

module.exports = {
  secret: 'secret',
  templates: {
    root: path.join(root, 'templates', 'pages')
  },
  root: root
};
